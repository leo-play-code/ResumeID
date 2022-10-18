import { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    const [navbar_state,setPageState] = useState('Home');
    function ChangeColor(){
        console.log('changecolor')
    }
    function PageSelected(navbar_state){
        console.log('page selected',navbar_state)
        setPageState(navbar_state)
    }
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
           
            <span className='navbar-center'>
                {(navbar_state == 'Home')&& <Link to="/" className=''>Home</Link>}
                <Link to="/" onClick={()=>PageSelected('Home')}>Home</Link>
                <Link to="/Note" onClick={()=>PageSelected('Note')}>Note</Link>
                <Link to="/Roadmap" onClick={()=>PageSelected('Roadmap')}>Roadmap</Link>
                <Link to="/Project" onClick={()=>PageSelected('Project')}>Project</Link>
            </span>
            <div className="navbar-right">
                <a onClick={ChangeColor}><i className="fa-solid fa-circle-half-stroke"></i></a>
            </div>
        </nav>
    )
}

export default Navbar ;
