import styled from "styled-components";
import Link from "next/link";
import Image from "next/Image";

const Menu = () => {
  return (
    <>
      <Landing>
        {/* <ImageDiv> */}
        <Image
          src='/knight-sword.png'
          alt='Acta Diurna Knight Logo'
          width={300}
          height={200}
        />
        {/* </ImageDiv> */}
        <h1>The Acta Diurna</h1>
      </Landing>
      <Nav>
        <li>
          <Link href='/acta-diurna/altamont_life'>
            <a>Altamont Life</a>
          </Link>
        </li>
        <Link href='/acta-diurna/sports'>
          <a>Sports</a>
        </Link>
        <Link href='/acta-diurna/world_wide'>
          <a>World Wide</a>
        </Link>
        <Link href='/acta-diurna/interviews'>
          <a>Interviews</a>
        </Link>
        <Link href='/acta-diurna/opinion'>
          <a>Opinions</a>
        </Link>
        <Link href='/acta-diurna/lifestyle'>
          <a>Lifestyle</a>
        </Link>
        <Link href='/acta-diurna/politics'>
          <a>Politics</a>
        </Link>
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
`;

const Landing = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 5vh;

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
