import Link from "next/link";

const links = [
  {
    path: "/",
    pathname: "Inicio",
  },
  {
    path: "/",
    pathname: "Nosotros",
  },
  {
    path: "/",
    pathname: "Servicios",
  },
  {
    path: "/",
    pathname: "Hablemos",
  },
];

const Nav = ({ containerStyles, listStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
