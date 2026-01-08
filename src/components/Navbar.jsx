import logo from "../assets/news_logo_1.jpg";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-gray-900 text-white">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="h-16 w-16 m-2 flex items-center">
          <img src={logo} alt="logo" />
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
