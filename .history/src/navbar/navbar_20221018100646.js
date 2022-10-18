import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
            <div className="links">
                <span className='nava'>
                    <a href="">Note</a>
                    <a href="">Roadmap</a>
                    <a href="">Project</a>
                </span>
                
            </div>
        </nav>
    )
}

export default Navbar ;
