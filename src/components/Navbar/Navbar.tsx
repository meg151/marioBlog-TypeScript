import { BrowserRouter, Link } from 'react-router-dom';
import { StyledNavbar } from 'styles/StyledNavbar.styled';


const Navbar = () => {
  return (
    <BrowserRouter>
    <StyledNavbar >
      <h1>Mario Blog</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </StyledNavbar>
    </BrowserRouter>
  );
};

export default Navbar;
