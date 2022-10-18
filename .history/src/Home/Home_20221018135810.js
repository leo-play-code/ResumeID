

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className="profile-container">
                <img src={pic} alt="" />
                <h2>Huang Chien HungLeo</h2>
            </div>
        </div>
    )   
}


export default Home ;