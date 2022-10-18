import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <h1><a href="/">Home</a></h1>
            <div className="links">
                <a href="">Note</a>
                <a href="">Note</a>
                <a href="">Note</a>
            </div>
        </nav>
    )
}

export default Navbar ;
