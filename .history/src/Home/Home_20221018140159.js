

function Home(){
    const pic = require('./static/image/selfy.jpg');
    return(
        <div className="Home">
            <div className="profile-container">
                <img src={pic} alt="" />
                <h2 className='MainName'>Huang Chien Hung</h2>
                <h3 className='EnglishName'>Leo</h3>
                <em>test</em>
            </div>
        </div>
    )   
}


export default Home ;