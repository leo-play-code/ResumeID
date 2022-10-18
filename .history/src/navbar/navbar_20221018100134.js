import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <h1><a href="/">Home</a></h1>
            <div className="links">
                <div>
                    <a href="">Note</a>
                    <a href="">Project</a>
                </div>
                
                <a href="">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar ;
