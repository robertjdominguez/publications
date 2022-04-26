import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ link }) => {
  const router = useRouter();

  // check for router location
  const isActive = (path) => {
    if (router.asPath === path) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <Link href={`/acta-diurna/${link.slug}`}>
      <a className={isActive(`/acta-diurna/${link.slug}`)}>{link.name}</a>
    </Link>
  );
};

export default NavLink;
