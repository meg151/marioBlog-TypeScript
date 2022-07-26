import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Home/Home';
import Create from 'components/Create/Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from 'components/BlogDetails/BlogDetails';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
          <Home/>
            </Route>
            <Route path="/create">
            <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
             </div>
    </Router>
  );
}

export default App;
