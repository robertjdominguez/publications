import React from 'react';
import styled from 'styled-components';

export default function CTA() {
  return (
    <CTAWrapper>
      <p>
        <i>
          To share your thoughts on this or on anything you've seen in The Acta Diurna, to suggest story ideas, or to
          become a contributor, <a href="mailto:MediaJournalismSpring2023@AltamontSchool.org">email us</a>.
        </i>
      </p>
    </CTAWrapper>
  );
}

const CTAWrapper = styled.div`
  max-width: 100%;
  border-top: 1px solid var(--accent);
  color: var(--dark-grey);
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;
