import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import BackButton from '../../../components/acta-diurna-components/BackButton';
import CTA from '../../../components/acta-diurna-components/CTA';
import { actaFetcher } from '../../../utils/api';
import { SingleArticleQuery, allArticlesQuery } from '../../../utils/queries';

function genTime(created) {
  const date = new Date(created);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  }).format(date);
}

const Slug = ({ post, staticBlocks }) => {
  // isolate the CTA from the static blocks
  const ctaText = staticBlocks[0].cta.html;
  return (
    <div className="wrapper">
      <Head>
        <title>{post.headline} - The Acta Diurna | The Altamont School</title>
      </Head>
      <h1>{post.headline}</h1>
      <Link href={`/acta-diurna/authors/${post.author.slug}`}>
        <Deets>
          <Author src={post.author.image.url} alt={post.author.name} />
          <Info>
            <p>{post.author.name}</p>
            <small>{genTime(post.createdAt)}</small>
          </Info>
        </Deets>
      </Link>
      <FullImg>
        <Image
          src={post.image.url}
          alt={post.headline}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`/_next/image?url=${post.image.url}&w=16&q=1`}
        />
      </FullImg>
      <Caption>{post.photoCaption}</Caption>
      <Body dangerouslySetInnerHTML={{ __html: post.body.html }} />
      {/* video embed */}
      {post.videoLink && (
        <div>
          <iframe
            src={post.videoLink}
            style={{ width: '100%', height: '100%', aspectRatio: '16/9', borderRadius: '8px' }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <CTA text={ctaText} />
      <BackButton />
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { post, staticBlocks } = await actaFetcher(SingleArticleQuery, { slug: slug });
  if (post.headline === null || post.body.html === null || post.image.url === null || post.author === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      staticBlocks,
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async () => {
  const { posts } = await actaFetcher(allArticlesQuery);
  // filter posts for ones with slugs
  const filteredPosts = posts.filter((post) => post.slug);
  return {
    paths: filteredPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export default Slug;

const FullImg = styled.div`
  width: 100%;
  height: 100vh;
  justify-self: center;
  position: relative;
`;

const Deets = styled.div`
  display: flex;
  margin: 2vh 0;
  align-items: center;
  cursor: pointer;

  p {
    margin: 0;
  }

  img {
    margin-right: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 600;
  }
`;

const Author = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: var(--norm-shadow);
`;

const Body = styled.div`
  img {
    width: 100%;
    height: auto;
    margin: 4vh 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
  }
`;

const Caption = styled.p`
  font-style: italic;
  font-size: 0.8rem;
  text-align: center;
`;
