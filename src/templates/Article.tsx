import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';

import { H2 } from 'site/components/core';
import PageWrapper from '../components/PageWrapper';

// import SEO from 'components/SEO';
// import Changelog from 'components/Changelog';

interface Props {
  data: {
    site: object;
    post: object;
  };
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "Do MMM, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;

const ArticleSection = styled.article`
  ${tw`leading-loose`};
`;

const PostMeta = ({ post }: any) => (
  <div css={tw`italic text-gray-600`}>
    <span css={tw`mr-2`}>{post.frontmatter.date}</span>
    <span css={tw`text-gray-500 text-xs`}>&#9679;</span>
    <span css={tw`ml-2`}>{post.fields.readingTime.text}</span>
  </div>
);

const Article = ({ data: { post } }: Props) => {
  return (
    <PageWrapper>
      <ArticleSection>
        <header css={tw`mb-16`}>
          <H2 css={tw`mb-0 mt-16`}>{post.frontmatter.title}</H2>
          <PostMeta post={post} />
        </header>

        {/* <section css={tw`max-w-3xl mx-auto`}> */}
        <MDXRenderer>{post.body}</MDXRenderer>
        {/* </section> */}

        {/* <Changelog commits={pageContext.changelog} /> */}

        <span css={tw`mt-16 block`}>
          <Link to="/articles">&lt;&lt; back to articles</Link>
        </span>
        <footer>{/* <Bio /> */}</footer>
      </ArticleSection>
    </PageWrapper>
  );
};

export default Article;
