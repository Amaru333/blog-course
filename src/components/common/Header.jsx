import { Link } from 'react-router';
import { useTheme } from '../ThemeContext';

function Header() {
  const { toggleTheme } = useTheme();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 px-4 shadow-md">
      <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">My Blog</h1>
      <nav>
        <ul className="flex space-x-8 justify-center text-lg text-white font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blog posts</Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
