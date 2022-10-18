import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home/Home';
import Note from './Note/Note';

function App(){
    return (
        <Router>
            <div className="App">
            <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/Note'>
                        <Note />
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default App;