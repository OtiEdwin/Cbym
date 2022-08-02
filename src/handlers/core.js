let server = 'http://localhost:8080/';

async function fetch_post(body, route){

  let res, data;
  console.log(body);
  
  try{
    res = await fetch( server + route , //e.g 'http://localhost:8080/' + 'login'

    {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) ,
    } ); // logs in and creates session

    data = await res.json();
    
    console.log(data);
    if(data ){
      //
      return data ;
    }else{
      //
      throw new Error("Error: Data not found");
    }

  }catch(error){
      //
      return { status : 'error', error };
  }

}

function routeChange(route) {
  window.location.href = route;
}

function setCookie(cookie_object, maxAgeSeconds){
  // do a little Type checking
  for(let key in cookie_object){
    let value = cookie_object[key];
    document.cookie = key + '=' + value + ';max-age=' + maxAgeSeconds;
  }
}

function getCookie(key){
  // let output_value = document.cookie.replace(' ', '').split(';').find(key_value=>key_value.startsWith(key));
  function replaceAll(a, b, c){// because 'replaceAll()' is not defined in Edge
    while (a.includes(b) ){
      a = a.replace(b, c);
    }
    return a;
  }

  let output_value = replaceAll( document.cookie, ' ', '').split(';').find(key_value=>key_value.startsWith(key));

  output_value = (output_value)? output_value.split('=')[1]: null;

  return output_value;
}

module.exports = {
    server,
    fetch_post,
    routeChange,
    setCookie,
    getCookie
}