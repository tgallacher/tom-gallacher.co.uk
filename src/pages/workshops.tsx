import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageWrapper from '../components/PageWrapper';

interface Workshop {
  name: string;
  location: string;
  date: Date;
  link: string;
}

export const workshopQuery = graphql`
  query WorkshopsQuery {
    allWorkshopsYaml(sort: { order: DESC, fields: date }) {
      nodes {
        date(formatString: "MMMM YYYY")
        name
        location
        link
      }
    }
  }
`;

const WorkshopsPage = ({ data }: any) => {
  const workshops: Workshop[] = data.allWorkshopsYaml.nodes;

  return (
    <PageWrapper>
      <h1 css={tw`text-5xl mt-4 mb-16`}>Workshops</h1>

      <ul>
        {workshops.map((wkshp: Workshop) => {
          const title = <h3 css={tw`text-lg font-bold`}>{wkshp.name}</h3>;

          return (
            <li key={`${wkshp.name}-${wkshp.date}`} css={tw`my-6 flex flex-grow justify-between`}>
              <div>
                {wkshp.link == null ? (
                  title
                ) : (
                  <a
                    href={wkshp.link}
                    css={tw`flex items-center`}
                    rel="noopener nofollow noreferrer"
                  >
                    {title}
                    <FontAwesomeIcon css={tw`ml-2`} icon="external-link-alt" />
                  </a>
                )}
                <span css={tw`text-sm italic`}>{wkshp.date}</span>
              </div>
              <div>{wkshp.location}</div>
            </li>
          );
        })}
      </ul>
    </PageWrapper>
  );
};

export default WorkshopsPage;
