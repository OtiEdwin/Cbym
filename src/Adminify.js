import './primitives.css'

function Adminify() {

    return(
        <>
            <div className="page-full absolute admin" id = 'subscribe'>
                <div className="form-holder col">
                    <div className="login relative">
                        <form action="" className=" form-inner col">
                            <div className="group">
                                <h3 className=" primary-dark pl-1">Add Admin</h3>
                                <h6 className='pl-1'>Select Member to make Administrator</h6>                             
                            </div>

                            <div className="group col">
                                <div className="input-holder col relative">
                                    <label for="email" className="primary-dark label absolute">User Email</label>
                                    <input type="email" name="email" id="email"/>  
                                    
                                    <ion-icon name="people" className="md hydrated password left absolute"></ion-icon>                               
                                </div>
                            </div>

                            <div className="group col">
                                <a className="gradient tc">Add</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Adminify