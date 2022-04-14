import styled from "styled-components";

const PageComponent = ({ entry, layout }) => {
  return (
    <Entry>
      <h1>{entry.title}</h1>
      <img src={entry.image?.url} />
      <Content
        layout={layout}
        dangerouslySetInnerHTML={{ __html: entry.body?.html }}
      />
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

const Content = styled.div`
  column-count: ${(props) => (props.layout === `short_story_1` ? 3 : 1)};
  column-width: ${(props) =>
    props.layout === `short_story_1` ? `300px` : null};
`;

const Author = styled.p`
  font-size: 0.975rem;
  font-weight: 700;
  font-style: italic;
`;
