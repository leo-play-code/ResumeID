import {Link} from 'react-router-dom';

function Navbar(){
    function ChangeColor(){
        console.log('changecolor')
    }
    function PageSelected(DOM){
        console.log('page selected')
        console.log(DOM)
    }
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
           
            <span className='navbar-center'>
                <Link to="/" className='page-selected'  >Home</Link>
                <Link to="/Note" onClick={PageSelected(this)}>Note</Link>
                <Link to="/Roadmap">Roadmap</Link>
                <Link to="/Project">Project</Link>
            </span>
            <div className="navbar-right">
                <a onClick={ChangeColor}><i className="fa-solid fa-circle-half-stroke"></i></a>
            </div>
        </nav>
    )
}

export default Navbar ;
