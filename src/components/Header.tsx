import Link from 'next/link';
import { Link as LinkIcon } from 'react-feather';

export const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0  border rounded-full bg-blue-600 border-blue-800 p-2.5"
        >
          <LinkIcon className="text-white" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/*{user ? (*/}
          {/*  <div className="flex items-center space-x-5">*/}
          {/*    <Link*/}
          {/*      href="/favorites"*/}
          {/*      className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"*/}
          {/*    >*/}
          {/*      My Favorites*/}
          {/*    </Link>*/}
          {/*    <Link*/}
          {/*      href="/api/auth/logout"*/}
          {/*      className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"*/}
          {/*    >*/}
          {/*      Logout*/}
          {/*    </Link>*/}
          {/*    <img*/}
          {/*      alt="profile"*/}
          {/*      className="rounded-full w-12 h-12"*/}
          {/*      // src={user.picture}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*) : (*/}
          <Link
            href="/"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Login
          </Link>
          {/*)}*/}
        </nav>
      </div>
    </header>
  );
};
