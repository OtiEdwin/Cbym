const { fetch_post, routeChange, getCookie } = require("./core.js");



async function post(title, author, content,         props){
  let body = { title, author, content, sid : getCookie('sid') };
  
  let result = await fetch_post(body, 'post');

  if( result.status === 'error'){
    
  }else if(result.status === 201){
    console.log('successfully posted');
    
    // routeChange('home');
  }else if(result.status === 401){
    //
    
  }else if(result.status === 404){

  }else{

  }

}

module.exports = {
    post
}