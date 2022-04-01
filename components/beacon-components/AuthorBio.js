import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Author = ({ name, image, blurb, entries }) => {
  return (
    <Wrapper>
      <AuthorWrapper>
        <AuthorImage>
          <Image src={image} layout='fill' objectFit='cover' />
        </AuthorImage>
        <Deets>
          <h3>{name}</h3>
          <p>{blurb}</p>
        </Deets>
      </AuthorWrapper>
      <Entries>
        <h2>All Entries</h2>
        {entries.map((entry) => (
          <Link
            href={`/beacon/${entry.year.year}/${entry.slug}`}
            key={entry.id}
          >
            <a>
              <div>
                <h3>{entry.title}</h3>
                <small>{entry.contentType}</small>
              </div>
            </a>
          </Link>
        ))}
      </Entries>
    </Wrapper>
  );
};

export default Author;

const AuthorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 40px;
  align-items: center;
  min-height: 20vh;
  margin-top: 10vh;
  padding-top: 5vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AuthorImage = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  align-self: center;
  margin: auto;

  img {
    border-radius: 50%;
  }
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
  }
`;

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;

  a {
    text-decoration: none;
    color: white;
    border-left: solid 2px var(--accent-2);
    margin-bottom: 14px;
    padding-left: 15px;
    font-size: 0.875rem;
    transition: ease-in-out 0.2s;

    &:hover {
      border-left: solid 2px var(--accent);
      color: var(--accent);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
