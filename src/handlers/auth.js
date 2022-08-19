const { fetch_post, routeChange, getCookie, setCookie } = require("./core.js");



async function login(key,         props){
    let body = { key };
    
    
    let result = await fetch_post(body, 'login');
  
    if( result.status === 'error'){
      
    }else if(result.status === 201){
      console.log('successful login');
      
      // props.setState({ loggedin: true });
      // set cookie to have logged in value
      // setCookie({cookie_object}, maxAgeSeconds);
      setCookie(
        {
          'loggedin': 'true',
          'sid': result.sid,
        },  60*60*24 );
      
      // routeChange('feeds');
    }else if(result.status === 401){
      //
  
    }else if(result.status === 404){
  
    }else{
  
    }
  
}


async function subscribe(email, firstname, lastname,         props){
    let body = { email, firstname, lastname };

    let result = await fetch_post(body, 'subscribe');

    if( result.status === 'error'){
        
      console.log(result);
    }else if(result.status === 201){
        console.log('successful subscription');
        
        //   routeChange('home');
    }else if(result.status === 401){
        //
    }else if(result.status === 404){

    }else{

    }

}

async function logout(          props){
    let body = { sid : getCookie('sid') };
    
    let result = await fetch_post(body, 'logout');
    if( result.status === 'error'){
        
      console.log(result);
    }else if(result.status === 201){
      console.log('successfully logged out');
      
      props.setState({ loggedin: false});
      // set cookie to have logged in value
      // setCookie({cookie_object}, maxAgeSeconds);
      setCookie(
        {
          'loggedin': '',
          'sid': '',
        },  1);
        
        //   routeChange('home');
    }else if(result.status === 401){
        //
    }else if(result.status === 404){

    }else{

    }
  
    
    // routeChange('home');
  
}

export {
    login,
    subscribe,
    logout
}