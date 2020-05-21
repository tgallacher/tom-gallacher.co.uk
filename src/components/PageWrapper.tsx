import React from 'react';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PrismStyle from './PrismStyles';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Container from './Container';

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  ${tw`flex flex-col w-full min-h-screen items-stretch`};
`;

const Main = styled.main`
  ${tw`bg-gray-900 text-gray-100 z-0`};
  ${tw`min-h-screen pb-10`};

  p {
    ${tw`text-lg leading-loose`};
  }
`;

const AbsoluteTopRight = styled.div`
  ${tw`hidden md:block absolute top-0 right-0 z-20`};
`;

const SocialLinks = () => (
  <div css={[tw`flex h-16 items-center p-2 mr-4`]}>
    <a
      href="https://twitter.com/tfgallacher"
      rel="nofollow noopener noreferrer"
      css={tw`text-2xl text-blue-500 mr-4 text-gray-600`}
    >
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>

    <a
      href="https://github.com/tgallacher"
      rel="nofollow noopener noreferrer"
      css={tw`text-2xl text-blue-500 text-gray-600`}
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
  </div>
);

const PageWrapper = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <PrismStyle />

      <AbsoluteTopRight>
        <SocialLinks />
      </AbsoluteTopRight>

      <Header />

      <Main>
        <Container>{children}</Container>
      </Main>
    </LayoutWrapper>
  );
};

export default PageWrapper;
