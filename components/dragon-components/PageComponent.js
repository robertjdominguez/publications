import styled from "styled-components";

const PageComponent = ({ entry }) => {
  return (
    <Entry>
      <h1>{entry.title}</h1>
      <img src={entry.image?.url} />
      <div dangerouslySetInnerHTML={{ __html: entry.body?.html }} />
      <Author>{entry.author}</Author>
    </Entry>
  );
};

export default PageComponent;

const Entry = styled.div`
  h1,
  p {
    margin: 0;
  }
`;

const Author = styled.p`
  font-size: 0.975rem;
  font-weight: 700;
  font-style: italic;
`;
