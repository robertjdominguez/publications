import React from 'react';
import styled from 'styled-components';

export default function CTA({ text }) {
  console.log(text);
  return <CTAWrapper dangerouslySetInnerHTML={{ __html: text }}></CTAWrapper>;
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
