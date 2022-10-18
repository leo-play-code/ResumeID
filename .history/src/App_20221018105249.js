import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home/Home';
import Note from './Note/Note';
import Roadmap from './Roadmap/Roadmap';
import Project from './Project/Project';

function App(){
    return (
        <Router>
            <div className="App">
            <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/Note'>
                        <Note />
                    </Route>
                    <Route exact path='/Roadmap'>
                        <Roadmap />
                    </Route>
                    <Route exact path='/Project'>
                        <Project />
                    </Route>

                </Switch>
            </div>
        </Router>
        
    )
}

export default App;