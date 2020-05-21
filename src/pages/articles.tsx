import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { H2, H4 } from 'site/components/core';

import PageWrapper from '../components/PageWrapper';

export const articlesQuery = graphql`
  query ArticlesQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 150)
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          title
          date(formatString: "Do MMM, YYYY")
        }
      }
    }
  }
`;

const ArticlesPage = ({ data }: any) => {
  const articles = data.allMdx.nodes;

  return (
    <PageWrapper>
      <H2>Articles</H2>

      <div
        css={[
          tw`grid grid-cols-2 gap-6`,
          css`
            grid-auto-rows: 1fr;
          `
        ]}
      >
        {articles.map((article: any) => (
          <Link
            css={[tw`flex p-4 mb-6 border-solid border-gray-800 border-r-2 border-b-2`]}
            to={article.fields.slug}
          >
            <article
              css={[
                tw`flex flex-col justify-between`,
                css`
                  p {
                    ${tw`leading-7`};
                  }
                `
              ]}
              key={articles.title}
            >
              <span>
                <H4 css={tw`my-0`}>{article.frontmatter.title}</H4>

                <div css={tw`italic text-gray-600`}>
                  <span css={tw`mr-2`}>{article.frontmatter.date}</span>
                  <span css={tw`text-gray-500 text-xs`}>&#9679;</span>
                  <span css={tw`ml-2`}>{article.fields.readingTime.text}</span>
                </div>
              </span>

              <p css={tw` mt-8 text-justify text-gray-100 leading-none`}>{article.excerpt}</p>

              <Link
                to={article.fields.slug}
                rel="button"
                css={[tw`hover:underline py-2 px-4 mt-6 inline-block text-right`]}
              >
                Read more &gt;&gt;
              </Link>
            </article>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
};

export default ArticlesPage;
