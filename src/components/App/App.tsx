import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Home/Home';
import CreateBlog from 'components/Create/CreateBlog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from 'components/BlogDetails/BlogDetails';
import GlobalStyles from 'styles/Global';
import BlogList from 'components/BlogList/BlogList';


function App() {
  return (
    <>
    <GlobalStyles />
 
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
          <Home/>
            </Route>
            <Route path="/create">
            <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
