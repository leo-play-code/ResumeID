import {Link} from 'react-router-dom';

function Navbar(){
    function ChangeColor(){
        console.log('changecolor')
    }
    function PageSelected(){
        console.log('page selected')
    }
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
           
            <span className='navbar-center'>
                <a href="" className='page-selected' onClick={PageSelected} >Home</a>
                <Link to="/Note">Note</Link>
                <Link href="">Roadmap</Link>
                <Link href="">Project</Link>
            </span>
            <div className="navbar-right">
                <a onClick={ChangeColor}><i className="fa-solid fa-circle-half-stroke"></i></a>
            </div>
        </nav>
    )
}

export default Navbar ;
