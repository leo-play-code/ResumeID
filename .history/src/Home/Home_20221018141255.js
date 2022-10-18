

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className='profile'>
                <div className="introduction-container">
                
                </div>
                <div className="">
                    <img src={pic} alt="" />
                    <h2 className='MainName'>Huang Chien Hung</h2>
                </div>
            </div>
            
            
        </div>
    )   
}


export default Home ;