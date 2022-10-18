

function Navbar(){
    return (
        <div className="Navbar">
            <nav className="navbar">
            <h1>The Leo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor :'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</Link>
            </div>
        </nav>
        </div>
    )
}

export default Navbar ;
