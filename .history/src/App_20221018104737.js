import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App(){
    return (
        <Router>
            <div className="App">
            <Navbar />
            Body
        </div>
        </Router>
        
    )
}

export default App;