import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Left = ({ year, prev, reverse, setReverse }) => {
  const router = useRouter();

  function handleClick() {
    setReverse(!reverse);
    router.push(`/dragon/${year}/${prev}`);
  }

  return (
    <SVG
      onClick={() => {
        handleClick();
      }}
      id='left'
      prev={prev}
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
        d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
      />
    </SVG>
  );
};

export default Left;

export const SVG = styled.svg`
  transition: ease-in-out 0.2s;
  :hover {
    transform: scale(1.1);
  }
  opacity: ${(props) => (props.prev ? 1 : 0)};
  margin-bottom: 7px;
`;
