import Link from "next/link";
import { dragonFetcher } from "../../utils/api";
import { allYearsQuery, landingQuery } from "../../utils/queries";

const index = ({ frontMatter, years }) => {
  return (
    <div className='wrapper'>
      <h1>The Dragon</h1>
      <div dangerouslySetInnerHTML={{ __html: frontMatter }} />
      <ul>
        {years.map((year) => (
          <li key={year.year}>
            <Link href={`/dragon/${year.year}`}>
              <a>{year.year}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  // Get the landing frontmatter
  const { landings } = await dragonFetcher(landingQuery);

  // Get the years
  const { years } = await dragonFetcher(allYearsQuery);

  return {
    props: {
      frontMatter: landings[0]?.frontMatter.html,
      years,
    },
  };
};

export default index;
