const { fetch_post, routeChange, setCookie } = require("../core.js");



async function login(email, password,         props){
  let body = { email, password };
  
  let result = await fetch_post(body, 'login');

  if( result.status === 'error'){
    
  }else if(result.status === 201){
    console.log('successful login');
    
    this.setState({user: data.user, fullname: [ data.firstname, data.lastname ], loggedin: true});
    // set cookie to have logged in value
    // setCookie({cookie_object}, maxAgeSeconds);
    setCookie(
      {
        'user': data.user,
        'loggedin': 'true',
      },  60*60*24);
    
    routeChange('home');
  }else if(result.status === 401){

  }else if(result.status === 404){

  }else{

  }

}