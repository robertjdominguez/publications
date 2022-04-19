import styled from "styled-components";

const Table = ({ isNavVisible, setIsNavVisible }) => {
  return (
    <SVG
      onClick={() => {
        setIsNavVisible(!isNavVisible);
      }}
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 22 22'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
      />
    </SVG>
  );
};

export default Table;

export const SVG = styled.svg`
  transition: ease-in-out 0.2s;
  :hover {
    transform: scale(1.1);
  }
  margin-bottom: 10px;
`;
