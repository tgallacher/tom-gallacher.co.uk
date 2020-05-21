import React, { useContext } from 'react';
// import { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { graphql, useStaticQuery, Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'gatsby-image';

import Container from './Container';
import LocationContext from './LocationContext';

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
  const location = useContext(LocationContext) as { pathname: string };

  return (
    <header css={[tw`bg-gray-900 text-gray-100 z-10 items-center`]}>
      <Container>
        <nav css={[tw`grid grid-cols-5 gap-3 h-16 items-center text-center justify-between`]}>
          {/* <div>
            <Link to="/about">about</Link>
          </div> */}
          <div css={tw`col-start-2`}>
            <Link to="/articles">articles</Link>
          </div>
          <div>
            <AnimatePresence>
              {location.pathname !== '/' && (
                <motion.div
                  key="avatar"
                  initial={{ opacity: 0, y: '-100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Link to="/">
                    <Image
                      fixed={avatar.childImageSharp.fixed}
                      css={[tw`rounded-full bg-center`]}
                    />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* <div>
            <Link to="/speaking">speaking</Link>
          </div> */}
          <div>
            <Link to="/workshops">workshops</Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
