import { Link } from 'react-router-dom';
import { Nav } from 'styles/Navbar.styled';


const Navbar = () => {
  return (
    <Nav >
      <h1>Mario Blog</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
