import styled from 'styled-components';
import Head from 'next/head';
import BackButton from '../../components/acta-diurna-components/BackButton';
import { actaFetcher } from '../../utils/api';
import { AboutPageQuery } from '../../utils/queries';

const About = ({ data }) => {
  const pageContent = data.staticBlocks[0].aboutPage.html;
  return (
    <div className="wrapper">
      <Head>
        <title>About - The Acta Diurna | The Altamont School</title>
      </Head>
      <h1>About the Paper</h1>
      <Body dangerouslySetInnerHTML={{ __html: pageContent }} />
      <BackButton />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await actaFetcher(AboutPageQuery);

  return {
    props: {
      data,
    },
  };
};

export default About;

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
