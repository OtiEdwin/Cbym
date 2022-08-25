const { fetch_post, getCookie } = require("./core.js");



async function post(title, author, content,         props){
  let body = { title, author, content, sid : getCookie('sid') };
  
  let result = await fetch_post(body, 'post');

  if( result.status === 'error'){
    props.dialogChange(true,
      {title: `Network Error` ,
      content: "Check your Internet connection and try again." }
    );

    console.log(result);
  }else if(result.status === 201){
    console.log('Successfully posted');
    props.dialogChange(true,
      {title: `Message sent.` ,
      content: "Successfully posted" }
    );
    //now, refresh page
    window.location.reload();
    
  }else{
    console.log(`Error ${result.status}`);
    props.dialogChange(true,
      {title: `Error ${result.status}` ,
      content: result.content }
    );
  }

}

async function deletePost( index,          props){
  let body = { sid : getCookie('sid') };
  
  let result = await fetch_post( body, `delete/${index}` );

  
  if( result.status === 'error'){
    props.dialogChange(true,
      {title: `Network Error` ,
      content: "Check your Internet connection and try again." }
    );

    console.log(result);
  }else if(result.status === 201){
    console.log('Successfully deleted.');
    props.dialogChange(true,
      {title: `Success.` ,
      content: "Message deleted." }
    );
    //now, refresh page
    window.location.reload();
    
  }else{
    console.log(`Error ${result.status}`);
    props.dialogChange(true,
      {title: `Error ${result.status}` ,
      content: result.content }
    );
  }
}

export {
    post,
    deletePost
}