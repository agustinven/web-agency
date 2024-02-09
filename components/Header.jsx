import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-full py-4 lg:py-8 border-b-[1px] border-b-gray-secondary">
      <div className="px-6 lg:px-8">
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
          {/* mobile nav */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
