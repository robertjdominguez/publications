import styled from 'styled-components';
import Head from 'next/head';
import BackButton from '../../components/acta-diurna-components/BackButton';

const About = () => {
  return (
    <div className="wrapper">
      <Head>
        <title>About - The Acta Diurna | The Altamont School</title>
      </Head>
      <h1>About the Paper</h1>
      <Body>
        <p>
          The term Acta Diurna, “daily acts” or “daily public records,” dates back to Ancient Rome. Information carved
          in metal or stone, their purpose was to record and share official business and important public affairs. We,
          the students, want this service to live on in Altamont’s The Acta Diurna. Our goal is for this online
          publication to be an honest reflection of Altamont students’ work, thought, and lives. It will be whatever the
          students want it to be, not a program dictated by teachers, but a newspaper for students, by students. The
          Acta Diurna will strive to explore and illuminate our world and the vital issues that shape it. Spring 2023
          Core Staff: Andrew Herrin, Editor and Reporter Isabelle Taylor, Editor and Reporter David Borasino, General
          Assignment Reporter George Benson, Sports Reporter Cruz Cunill, Sports Reporter Alden DuMontier, Reporter and
          Foreign Affairs Commentator Akshay Gaddamanugu, General Assignment Reporter Jack Hoover, Sports Reporter
          Campbell Hughey, Reporter and Lifestyles Writer Frasier Horton, Reporter and Sports Editor Emily Isbell,
          Reporter Joe Porter, Reporter and Sports Editor John-Nathan Rosborough, Sports Reporter Vinay Yerramsetti,
          Contributing Editor and Reporter.
        </p>
      </Body>
      <BackButton />
    </div>
  );
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
