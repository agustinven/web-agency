import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="lg:px-12 w-full py-4 xl:py-10">
      <div className="container mx-auto">
        {/* logo, nav(desktop), btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <div className="w-10 h-10 rounded-full bg-gray"></div>
          </Link>
          {/* nav & btn */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-x-12">
              <Nav
                containerStyles="flex items-center justify-between"
                listStyles="flex gap-x-12 text-white font-regular"
              />
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden absolute right-3 top-5">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

