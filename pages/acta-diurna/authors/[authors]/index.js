import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { actaFetcher } from "../../../../utils/api";
import { authorsQuery, singleAuthorQuery } from "../../../../utils/queries";
import Menu from "../../../../components/acta-diurna-components/Menu";
import { motion } from "framer-motion";

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

const index = ({ posts }) => {
  return (
    <motion.div
      className='wrapper'
      variants={variants}
      initial='initial'
      animate='in'
      exit='out'
    >
      <Head>
        <title>The Acta Diurna - Student Newspaper | The Altamont School</title>
      </Head>
      <Menu />
      {posts.length < 1 && (
        <Gallery>
          <Empty>
            <h1>Our journalists are hard at work. Check back soon!</h1>
            <img src='/typewriter.png' alt='typewriter' />
          </Empty>
        </Gallery>
      )}
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
                lazyBoundary='400px'
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
    </motion.div>
  );
};

export const getStaticProps = async (ctx) => {
  const { authors } = ctx.params;
  const { author } = await actaFetcher(singleAuthorQuery, { slug: authors });

  return {
    props: {
      author,
      posts: author.post !== null ? author.post : [],
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async () => {
  const { authors } = await actaFetcher(authorsQuery);
  return {
    paths: authors.map((author) => ({
      params: { authors: author.slug },
    })),
    fallback: false,
  };
};

export default index;

const FullImg = styled.img`
  width: 100%;
  height: auto;
  justify-self: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--black);
  color: white;
  margin-top: -10vh;
  padding-top: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  max-width: 1200px;
  margin: 0 auto;
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

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 300px;
    height: auto;
  }
`;
