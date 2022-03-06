import styled from "styled-components";
import Image from "next/image";
import { actaFetcher } from "../../../utils/api";
import { SingleArticleQuery, allArticlesQuery } from "../../../utils/queries";

function genTime(created) {
  const date = new Date(created);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(date);
}

const Slug = ({ post }) => {
  return (
    <div className='wrapper'>
      <h1>{post.headline}</h1>
      <Deets>
        <Author src={post.author.image.url} alt={post.author.name} />
        <Info>
          <p>{post.author.name}</p>
          <small>{genTime(post.createdAt)}</small>
        </Info>
      </Deets>
      <FullImg>
        <Image
          src={post.image.url}
          alt={post.headline}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={`/_next/image?url=${post.image.url}&w=16&q=1`}
        />
      </FullImg>
      <Body dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { post } = await actaFetcher(SingleArticleQuery, { slug: slug });

  return {
    props: {
      post,
    },
  };
};

// get static paths for all entries
export const getStaticPaths = async () => {
  const { posts } = await actaFetcher(allArticlesQuery);
  return {
    paths: posts.map((post) => ({
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
    margin: 4vh 0;
  }
`;
