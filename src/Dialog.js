function Dialog_Box({ message_title, message_content, dialogue, dialogChange }) {
    return (
      <>
      <div className="page-full absolute admin" id = 'admin' style={{ display: dialogue }}>
          <div className="form-holder col">
              <div className="login relative">
                  <div className=" form-inner col">
                      <div className='tr ex' onClick={ dialogChange }>
                          <div className='nav-icon-shell-alt flex-center'>
                              <ion-icon name="close"></ion-icon>
                          </div> 
                      </div>
  
                      <div className="group">
                          <h3 className=" primary-dark pl-1">{ message_title }</h3>
                          <h6 className='pl-1'>{ message_content }</h6>                             
                      </div>
  
                      <div className="group col">
                          <a className="gradient tc">OK</a>
                      </div>
  
                  </div>
              </div>
          </div>
      </div> 
  </>
    );
  }
  export default Dialog_Box