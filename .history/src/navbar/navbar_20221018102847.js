import {Link} from 'react-router-dom';

function Navbar(){
    function ChangeColor(){
        console.log('changecolor')
    }
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
           
            <span className='navbar-center'>
                <a href="">Note</a>
                <a href="">Roadmap</a>
                <a href="">Project</a>
                <a onClick={ChangeColor}><i className="fa-solid fa-circle-half-stroke"></i></a>
            </span>
            <div className="navbar-right">
                
            </div>
        </nav>
    )
}

export default Navbar ;
