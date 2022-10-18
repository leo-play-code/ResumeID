import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
           
            <span className='navbar-center'>
                <a href="">Note</a>
                <a href="">Roadmap</a>
                <a href="">Project</a>
            </span>
            <div className="navbar-right">
                <a><i class="fa-solid fa-circle-half-stroke"></i></a>
            </div>
        </nav>
    )
}

export default Navbar ;