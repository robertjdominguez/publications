import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { actaFetcher, truncate } from "../../utils/api";
import { allArticlesQuery } from "../../utils/queries";
import Menu from "../../components/acta-diurna-components/Menu";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
  out: {
    opacity: 0,
    y: 100,
  },
};

const index = ({ top, posts }) => {
  return (
    <motion.div className="wrapper" variants={variants} initial="initial" animate="in" exit="out">
      <Head>
        <title>The Acta Diurna - Student Newspaper | The Altamont School</title>
      </Head>
      <Menu />
      <h2>Recent Stories</h2>
      <Recent>
        {top.map((post) => (
          <div key={post.id}>
            <RecentImg>
              <Image
                src={post.image.url}
                alt={post.headline}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
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
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`/_next/image?url=${post.image.url}&w=16&q=1`}
                loading="lazy"
                lazyBoundary="400px"
              />
            </PostImg>
            <div id="details">
              <h3>{post.headline}</h3>
              <p>{post.hook}</p>
              <Link href={`/acta-diurna/posts/${post.slug}`} scroll={false}>
                <a>Read More &rarr;</a>
              </Link>
            </div>
          </Post>
        ))}
      </Gallery>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const { posts } = await actaFetcher(allArticlesQuery);
  // filter posts for any that have null values except for VideoLink
  const filteredPosts = posts.filter((post) => {
    // switch statement to check for null values
    switch (true) {
      case post.headline === null:
        return false;
      case post.image === null:
        return false;
      case post.image.url === null:
        return false;
      case post.author === null:
        return false;
      default:
        return true;
    }
  });

  return {
    props: {
      posts: filteredPosts,
      top: filteredPosts.slice(0, 3),
    },
  };
};

export default index;

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

      @media (max-width: 600px) {
         {
          width: 100%;
          text-align: center;
        }
      }
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
      padding: 0.5rem 1rem;
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
