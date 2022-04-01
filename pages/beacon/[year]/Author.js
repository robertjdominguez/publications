import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Author = ({ name, image, blurb, slug }) => {
  return (
    <AuthorWrapper>
      <AuthorImage>
        <Image src={image} layout='fill' objectFit='contain' />
      </AuthorImage>
      <Deets>
        <h3>{name}</h3>
        <p>{blurb}</p>
        <Link href={`/beacon/student-work/${slug}`}>
          <a>Click here to see more of this student's work.</a>
        </Link>
      </Deets>
    </AuthorWrapper>
  );
};

export default Author;

const AuthorWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  border-top: solid 1px var(--light-grey);
  min-height: 20vh;
  margin-top: 10vh;
  padding-top: 5vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AuthorImage = styled.div`
  display: flex;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Deets = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
    border-bottom: solid 1px var(--accent);
    margin-right: auto;
    transition: ease-in-out 0.2s;

    &:hover {
        border-bottom: solid 1px var(--accent-2);
  }
`;
