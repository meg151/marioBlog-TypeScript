import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Home/Home';
import CreateBlog from 'components/BlogCreate/BlogCreate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from 'components/BlogDetails/BlogDetails';
import GlobalStyles from 'styles/Global';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()


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
            <QueryClientProvider client={queryClient}>
            <CreateBlog />
            </QueryClientProvider>
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
