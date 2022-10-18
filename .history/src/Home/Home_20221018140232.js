

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className="profile-container">
                <img src={pic} alt="" />
                <h2 className='MainName'>Huang Chien Hung</h2>
                <h3><em>Leo</em></h3>
            </div>
        </div>
    )   
}


export default Home ;