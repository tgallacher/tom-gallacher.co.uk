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
        <div css={tw`text-center`}>
          <div css={tw`text-center`}>
            <motion.div
              animate={{
                opacity: [0, 0.5, 1],
                scale: [0.1, 0.1, 1],
                y: [-999, 0, 0],
                rotate: [0, 0, 360]
              }}
            >
              <Image fixed={avatar.childImageSharp.fixed} css={[tw`rounded-full bg-center`]} />
            </motion.div>

            <h2 css={tw`mt-5`}>
              Hi, my name is Tom{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
          </div>
          <p>
            Welcome to my <i>digital garden</i>, where I attend to my thoughts, ramblings and
            everything in between on anything tech-related.
          </p>
          <p>
            You'll find my take on everything dev and tech. I love devOps, JavaScript/NodeJs,
            ReactJS, Redux, Serverless/FaaS, Docker, GraphQL and IoT to name a few. This garden is
            largely to help my future self remember how I got to wherever it is I end up, but it may
            also help you as well.
          </p>
          <blockquote css={tw`text-left`}>
            Everything here isn't necessarily complete, and in some cases may not even be correct{' '}
            <span role="img" aria-label="sweat">
              😅
            </span>
            ; although hopefully not often.
          </blockquote>

          <p>
            This is a place for me to share and work on ideas openly, instead of hoarding and then
            losing these somewhere on my computer, notepad, sticky note, dog, etc. And to do so in
            public -- I'm a huge fan and advocate of{' '}
            <a
              href="https://www.swyx.io/writing/learn-in-public/"
              rel="noopener nofollow noreferrer"
            >
              learn in public
            </a>
            .
          </p>

          <p>
            If you see something that isn't finished and would like to see it happen, nudge me on{' '}
            <a href="https://twitter.com/tfgallacher" rel="noopener nofollow noreferrer">
              Twitter
            </a>{' '}
            to push it up my list.
          </p>
        </div>
      </PageWrapper>
    </LocationContext.Provider>
  );
};

export default Index;
