import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const cats = [
  {
    name: "Altamont Life",
    slug: "altamont_life",
  },
  {
    name: "Sports",
    slug: "sports",
  },
  {
    name: "World Wide",
    slug: "world_wide",
  },
  {
    name: "Interviews",
    slug: "interviews",
  },
  {
    name: "Opinions",
    slug: "opinion",
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
  },
  {
    name: "Politics",
    slug: "politics",
  },
];

const Menu = () => {
  return (
    <>
      <Link href='/acta-diurna'>
        <Landing>
          <Image
            src='/knight-sword.png'
            alt='Acta Diurna Knight Logo'
            width={300}
            height={200}
          />

          <h1>The Acta Diurna</h1>
        </Landing>
      </Link>
      <Nav>
        {cats.map((cat) => (
          <NavLink key={cat.slug} link={cat} />
        ))}
      </Nav>
    </>
  );
};

export default Menu;

const Nav = styled.ul`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  font-size: clamp(0rem, 2.5vw, 1.4rem);
  text-align: center;
  list-style: none;
  padding-left: 0;

  a {
    text-decoration: none;
    color: var(--black);
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-bottom: 1px solid var(--accent);
      color: var(--accent);
    }
  }
`;

const Landing = styled.a`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 5vh;
  cursor: pointer;

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
    }
    flex-direction: column-reverse;
  }
`;

const ImageDiv = styled.div`
  width: 50px;
  height: 50px;
`;
