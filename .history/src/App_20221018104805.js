import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App(){
    return (
        <Router>
            <div className="App">
            <Navbar />
                <Switch>
                    <Route>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default App;