import React from 'react';
// import { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';

import Container from './Container';

const profilePicQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

const Header = () => {
  const { avatar } = useStaticQuery(profilePicQuery);

  return (
    <header css={[tw`bg-gray-900 text-gray-100 shadow-2xl z-10 items-center`]}>
      <Container>
        <nav css={[tw`grid grid-cols-5 gap-3 h-16 items-center text-center justify-between`]}>
          <div>
            <Link to="/about">about</Link>
          </div>
          <div>
            <Link to="/articles">articles</Link>
          </div>
          <div>
            <Link to="/">
              <Image fixed={avatar.childImageSharp.fixed} css={[tw`rounded-full bg-center`]} />
            </Link>
          </div>
          <div>
            <Link to="/speaking">speaking</Link>
          </div>
          <div>
            <Link to="/workshops">workshops</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
