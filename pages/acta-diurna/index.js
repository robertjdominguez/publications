import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { actaFetcher, truncate } from "../../utils/api";
import { allArticlesQuery } from "../../utils/queries";

const index = ({ top, posts }) => {
  return (
    <div className='wrapper'>
      <Landing>
        <img src='./knight-sword.png' />
        <h1>The Acta Diurna</h1>
      </Landing>
      <Menu>
        <li>Altamont Life</li>
        <li>Sports</li>
        <li>World Wide</li>
        <li>Interviews</li>
        <li>Opinions</li>
        <li>Politics</li>
      </Menu>
      <h2>Recent Stories</h2>
      <Recent>
        {top.map((post) => (
          <div key={post.id}>
            <RecentImg>
              <Image
                src={post.image.url}
                alt={post.headline}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL={`/_next/image?url=${post.image.url}&w=16&q=1`}
              />
            </RecentImg>
            <h3>{post.headline}</h3>
            <p>{truncate(post.hook, 100)}</p>
            <Link href={`/acta-diurna/posts/${post.slug}`} scroll={false}>
              <a>Read More &rarr;</a>
            </Link>
          </div>
        ))}
      </Recent>
      <h2>All Stories</h2>
      <Gallery>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostImg>
              <Image
                src={post.image.url}
                alt={post.headline}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL={`/_next/image?url=${post.image.url}&w=16&q=1`}
                loading='lazy'
              />
            </PostImg>
            <div id='details'>
              <h3>{post.headline}</h3>
              <p>{post.hook}</p>
              <Link href={`/acta-diurna/posts/${post.slug}`} scroll={false}>
                <a>Read More &rarr;</a>
              </Link>
            </div>
          </Post>
        ))}
      </Gallery>
    </div>
  );
};

export const getStaticProps = async () => {
  const { posts } = await actaFetcher(allArticlesQuery);

  return {
    props: {
      posts,
      top: posts.slice(0, 3),
    },
  };
};

export default index;

const Landing = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 5vh;

  img {
    width: 40%;
  }
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

const Recent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  align-content: space-between;
  margin-bottom: 5vh;

  h3 {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      margin-left: auto;
      text-decoration: none;
      background: var(--dark-grey);
      color: white;
      padding: 8px 10px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--light-grey);
    }
  }
`;

const RecentImg = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  align-items: start;
  justify-content: start;
  min-height: 200px;

  h3 {
    margin-top: 0;
  }

  #details {
    display: flex;
    flex-direction: column;
    height: 100%;

    a {
      margin-left: auto;
      text-decoration: none;
      background: var(--dark-grey);
      color: white;
      padding: 8px 10px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      margin-top: auto;

      &:hover {
        background: var(--light-grey);
      }

      @media (max-width: 600px) {
         {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 600px) {
     {
      grid-template-columns: 1fr;
    }
  }
`;

const PostImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;

  @media (max-width: 600px) {
     {
      width: 100%;
      height: 300px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  font-size: clamp(0rem, 2.5vw, 1.4rem);
  text-align: center;
  list-style: none;
  padding-left: 0;
`;
