import Link from "next/link";
import { beaconFetcher } from "../../utils/api";
import { allYearsQuery, landingQuery } from "../../utils/queries";

const index = ({ frontMatter, years }) => {
  return (
    <div className='wrapper'>
      <h1>The Beacon</h1>
      <div dangerouslySetInnerHTML={{ __html: frontMatter }} />
      <ul>
        {years.map((year) => (
          <li key={year.year}>
            <Link href={`/beacon/${year.year}`}>
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
  const { landings } = await beaconFetcher(landingQuery);

  // Get the years
  const { years } = await beaconFetcher(allYearsQuery);

  return {
    props: {
      frontMatter: landings[0]?.frontMatter.html,
      years,
    },
  };
};

export default index;
