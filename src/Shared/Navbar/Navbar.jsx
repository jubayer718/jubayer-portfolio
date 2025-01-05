import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div >
      <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <a href="'/" aria-label='Home'>
            <img className='mx-2' width={80} height={50} src={logo} alt="logo" />
          </a>
        </div>
        <div className=' flex items-center justify-center gap-4 '>
          <Link to='/'>
            Home
          </Link>

          <Link to='/'>
            About
          </Link>

          <Link to='/'>
            My Project
          </Link>

          <Link to='/'>
            contact me
          </Link>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;