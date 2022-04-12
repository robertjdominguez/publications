import styled from "styled-components";
import Link from "next/link";

const Right = ({ year, next }) => {
  return (
    <Link href={`/dragon/${year}/${next}`}>
      <a>
        <SVG
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </SVG>
      </a>
    </Link>
  );
};

export default Right;

export const SVG = styled.svg`
  transition: ease-in-out 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;
