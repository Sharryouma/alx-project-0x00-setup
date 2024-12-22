import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ALX Project</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <a className="hover:text-gray-400">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="hover:text-gray-400">Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a className="hover:text-gray-400">Users</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
