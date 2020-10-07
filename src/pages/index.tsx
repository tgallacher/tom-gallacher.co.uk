import React from 'react';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import LocationContext from '../components/LocationContext';

export const articlesQuery = graphql`
  query HomePageQuery {
    avatar: file(absolutePath: { regex: "/profile-pic/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Index = ({ data: { avatar }, location }: any) => {
  return (
    <LocationContext.Provider value={location}>
      <PageWrapper>
        <div css={tw`text-left`}>
          <div css={tw`text-center`}>
            {/* <motion.div
              animate={{
                opacity: [0, 0.5, 1],
                scale: [0.1, 0.1, 1],
                y: [-999, 0, 0],
                rotate: [0, 0, 360]
              }}
            > */}
            <Image
              fadeIn={false}
              fixed={avatar.childImageSharp.fixed}
              css={[tw`rounded-full bg-center`]}
            />
            {/* </moxtion.div> */}

            <h2 css={tw`mt-5`}>
              Welcome{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
          </div>

          <p>This is my digital garden, where you'll find my take on everything dev and tech.</p>
          <p>
            I love <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>devOps</code>,{' '}
            <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>
              JavaScript/NodeJS
            </code>
            , <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>ReactJS</code>,{' '}
            <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>GraphQL</code>,{' '}
            <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>GatsbyJS</code>,{' '}
            <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>
              Serverles / FaaS movement
            </code>
            , <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>Docker</code>,{' '}
            <code style={{ fontSize: '1rem', color: 'black', padding: '2px' }}>
              Raspberry pi &amp; IoT
            </code>{' '}
            to name a few.
          </p>
          <blockquote css={tw`text-left`}>
            Everything here isn't necessarily complete, but may be a WIP. Ping me on{' '}
            <a href="https://twitter.com/tfgallacher" rel="noopener nofollow noreferrer">
              Twitter
            </a>{' '}
            if you came across something you would love me to finish off!
          </blockquote>
          <p>
            This site is largely to help my future self remember how I got to wherever it is I end
            up.
          </p>
          <p>But, it may also help you as well.</p>
          {/* <p>
            This is a place for me to share and work on ideas openly, instead of hoarding and then
            losing these somewhere on my computer, notepad, sticky note, dog, etc. And to do so in
            public -- I'm a huge fan and advocate of{' '}
            <a
              href="https://www.swyx.io/writing/learn-in-public/"
              rel="noopener nofollow noreferrer"
            >
              learn in public
            </a>
          </p> */}
        </div>
      </PageWrapper>
    </LocationContext.Provider>
  );
};

export default Index;
