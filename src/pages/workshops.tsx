import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H2, H5 } from 'site/components/core';

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
      <H2>Workshops</H2>

      <ul>
        {workshops.map((wkshp: Workshop) => {
          const title = <H5 css={tw`my-0`}>{wkshp.name}</H5>;

          return (
            <li
              key={`${wkshp.name}-${wkshp.date}`}
              css={tw`my-6 flex flex-grow justify-between items-baseline`}
            >
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
