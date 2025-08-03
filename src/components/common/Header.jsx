import { Link } from 'react-router';

function Header() {
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
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
