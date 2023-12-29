import React from 'react';
import styled from 'styled-components';

export default function CTA() {
  return (
    <CTAWrapper>
      <p>
        <i>
          To share your thoughts on this or on anything you've seen in The Acta Diurna, to suggest story ideas, or to
          become a contributor, email{' '}
          <a href="mailto:MediaJournalismSpring2023@AltamontSchool.org">MediaJournalismSpring2023@AltamontSchool.org</a>
          .
        </i>
      </p>
    </CTAWrapper>
  );
}

const CTAWrapper = styled.div`
  border-top: 1px solid var(--accent);
  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
  }
`;
