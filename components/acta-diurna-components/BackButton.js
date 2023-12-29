import styled from 'styled-components';
import Link from 'next/link';

const BackButton = () => {
  return (
    <ButtonWrapper>
      <Link href="/acta-diurna/">
        <a title="Back to homepage">« Back</a>
      </Link>
    </ButtonWrapper>
  );
};

export default BackButton;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;
  z-index: 100;
  background: var(--black);
  font-size: 0.8rem;
  color: white;
  border-radius: 50% 0 0 0;
  a {
    text-decoration: none;
    color: var(--white);
    &:hover {
      color: var(--yellow);
    }
  }
`;
