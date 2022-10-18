

function Home(){
    const pic = require('./selfy.jpg');
    return(
        <div className="Home">
            <div className="profile-container">
                <img src={pic} alt="" />
                <h2>Leo</h2>
            </div>
        </div>
    )   
}


export default Home ;