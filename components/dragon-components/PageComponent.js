import styled from "styled-components";

const PageComponent = ({ entry, layout }) => {
  return (
    <Entry>
      <h1>{entry.title}</h1>
      <img src={entry.image?.url} />
      <Author>{entry.author}</Author>
      <Content
        layout={layout}
        dangerouslySetInnerHTML={{ __html: entry.body?.html }}
      />
    </Entry>
  );
};

export default PageComponent;

const Entry = styled.div`
  h1,
  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  column-count: ${(props) => (props.layout === `short_story_1` ? 3 : 1)};
  column-width: ${(props) =>
    props.layout === `short_story_1` ? `350px` : null};

  p {
    text-indent: 2em;
  }

  blockquote {
    font-size: 1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    margin: 40px;
  }
`;

const Author = styled.p`
  font-size: 0.975rem;
  font-weight: 700;
  font-style: italic;
`;
