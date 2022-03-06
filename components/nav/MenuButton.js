import { useAppContext } from "../../ctx";
import styled from "styled-components";

const MenuButton = () => {
  const { isNavVisible, setIsNavVisible } = useAppContext();
  return (
    <MenuWrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='var(--accent)'
        onClick={() => setIsNavVisible(!isNavVisible)}
        style={{
          // position: `fixed`,
          height: `40px`,
          width: `auto`,
          right: 0,
          top: 0,
          paddingRight: `40px`,
          marginTop: `40px`,
          cursor: `pointer`,
        }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>
    </MenuWrapper>
  );
};

export default MenuButton;

export const MenuWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  top: 0;
  /* background: var(--white); */
  z-index: 5;

  svg {
    height: 40px;
    width: auto;
    margin-bottom: 20px;
  }
`;
