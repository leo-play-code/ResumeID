

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className='pr'>

            </div>
            <div className="introduction-container">
                
            </div>
            <div className="profile-container">
                <img src={pic} alt="" />
                <h2 className='MainName'>Huang Chien Hung</h2>
            </div>
        </div>
    )   
}


export default Home ;