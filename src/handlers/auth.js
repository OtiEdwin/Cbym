const { fetch_post, getCookie, setCookie } = require("./core.js");



async function login(key,         props){
  
    let body = { key };
    
    // first, logout
    await logout(   { setLoggedIn : props.setLoggedIn});

    let result = await fetch_post(body, 'login');
  
    if( result.status === 'error'){
      props.dialogChange(true, {title: `Network Error` , content: "Check your Internet connection and try again." });
      
    }else if(result.status === 201){
      console.log('successful login');

      props.setLoggedIn(true);

      // set cookie to have logged in value
      // setCookie({cookie_object}, maxAgeSeconds);
      setCookie(
        {
          'loggedin': 'true',
          'sid': result.sid,
        },  60*60*24 );
      
      // console.log(props);
      props.navigate('/feeds');

    }else {
      //
      props.dialogChange(true, {title: `Error ${result.status}` , content: result.content });
    }
    
}


async function subscribe(email, firstname, lastname,         props){
    let body = { email, firstname, lastname };

    let result = await fetch_post(body, 'subscribe');

    if( result.status === 'error'){
      props.dialogChange(true,
        {title: `Network Error` ,
        content: "Check your Internet connection and try again." }
      );
      
      console.log(result);
    }else if(result.status === 201){
        console.log('successful subscription');
        props.dialogChange(true,
          {title: `Success!` ,
          content: "You can now recieve regular updates through your email." }
        );

    }else {
      props.dialogChange(true,
        {title: `Subscription Error(${result.status})` ,
        content: result.content }
      );
    }

}

async function logout(          props){
    let body = { sid : getCookie('sid') };

    setCookie(
        {
          'loggedin': '',
          'sid': '',
        },  1);

    fetch_post(body, 'logout');

    props.setLoggedIn(false);

    // routeChange('home');
    // props.history.push('/'); 
}

export {
    login,
    subscribe,
    logout
}