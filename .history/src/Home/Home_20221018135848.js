

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className="profile-container">
                <img src={pic} alt="" />
                <h2>Huang Chien Hung</h2>
                <h3>Leo</h3>
            </div>
        </div>
    )   
}


export default Home ;