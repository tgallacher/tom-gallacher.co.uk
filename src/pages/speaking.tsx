import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageWrapper from '../components/PageWrapper';

interface Speaking {
  title: string;
  event: string;
  link: string;
  date: Date;
}

export const talksQuery = graphql`
  query TalksQuery {
    allSpeakingYaml(sort: { order: DESC, fields: date }) {
      nodes {
        date(formatString: "MMMM YYYY")
        event
        title
        link
      }
    }
  }
`;

const TalksPage = ({ data }: any) => {
  const talks: Speaking[] = data.allSpeakingYaml.nodes;

  return (
    <PageWrapper>
      <h1 css={tw`text-5xl mt-4 mb-16`}>Talks</h1>

      <ul>
        {talks.map((talk: Speaking) => {
          const title = <h3 css={tw`text-lg font-bold`}>{talk.title}</h3>;
          return (
            <li key={`${talk.title}-${talk.date}`} css={tw`my-6 flex flex-grow justify-between`}>
              <div>
                {talk.link == null ? (
                  title
                ) : (
                  <a
                    href={talk.link}
                    css={tw`flex items-center`}
                    rel="noopener nofollow noreferrer"
                  >
                    {title}
                    <FontAwesomeIcon css={tw`ml-2`} icon="external-link-alt" />
                  </a>
                )}
                <span css={tw`text-sm italic`}>{talk.date}</span>
              </div>
              <div>{talk.event}</div>
            </li>
          );
        })}
      </ul>
    </PageWrapper>
  );
};

export default TalksPage;
