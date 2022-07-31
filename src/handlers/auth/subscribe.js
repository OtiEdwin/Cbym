const { server, fetch_post, routeChange, setCookie, getCookie } = require("../core");


async function subscribe(email, firstname, lastname,         props){
    let body = { email, firstname, lastname };
    
    let result = await fetch_post(body, 'subscribe');
  
    if( result.status === 'error'){
      
    }else if(result.status === 201){
      console.log('successful subscription');
      
    //   this.setState({user: data.user, fullname: [ data.firstname, data.lastname ], loggedin: true});
      // set cookie to have logged in value
      // setCookie({cookie_object}, maxAgeSeconds);
    //   setCookie(
    //     {
    //       'user': data.user,
    //       'loggedin': 'true',
    //     },  60*60*24);
      
    //   routeChange('home');
    }else if(result.status === 401){
  
    }else if(result.status === 404){
  
    }else{
  
    }
  
  }