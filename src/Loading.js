function Loading_Box({ loading }) {
    return (
        <>
            <div className="page-full absolute admin" id = 'admin' style={{ display: loading }}>
                <div className="form-holder col">
                    <div className="login relative">
                        <div className=" form-inner col">
        
                            <div className="group">
                                <h3 className=" primary-dark pl-1">Loading</h3>
                                <h6 className='pl-1'>Please be patient while loading...</h6>                             
                            </div>
        
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
  }
  export default Loading_Box