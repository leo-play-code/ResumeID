import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    const [navbar_state,setPageState] = useState('Home');
    function ChangeColor(){
        console.log('changecolor')
    }
    function PageSelected(navbar_state){
        setPageState(navbar_state)
    }
    useEffect(()=>{
        init_url_arr = window.location.href.split('/')
        init_url_page = init_url_arr[init_url_arr.length()-1]
        
    })
    return (
        <nav className="navbar">
            <h1>Huang Chien Hung (Leo)</h1>
            <span className='navbar-center'>
                {(navbar_state == 'Home')&& <Link to="/" className='page-selected'>Home</Link>}
                {!(navbar_state == 'Home')&&<Link to="/" onClick={()=>PageSelected('Home')}>Home</Link>}
                {(navbar_state == 'Note')&& <Link to="/Note" className='page-selected'>Note</Link>}
                {!(navbar_state == 'Note')&&<Link to="/Note" onClick={()=>PageSelected('Note')}>Note</Link>}
                {(navbar_state == 'Roadmap')&& <Link to="/Roadmap" className='page-selected'>Roadmap</Link>}
                {!(navbar_state == 'Roadmap')&&<Link to="/Roadmap" onClick={()=>PageSelected('Roadmap')}>Roadmap</Link>}
                {(navbar_state == 'Project')&& <Link to="/Project" className='page-selected'>Project</Link>}
                {!(navbar_state == 'Project')&&<Link to="/Project" onClick={()=>PageSelected('Project')}>Project</Link>}
            </span>
            <div className="navbar-right">
                <a onClick={ChangeColor}><i className="fa-solid fa-circle-half-stroke"></i></a>
            </div>
        </nav>
    )
}

export default Navbar ;
