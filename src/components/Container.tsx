import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Container = styled.div`
  ${tw`mx-auto`};
  ${tw`sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl`};
  display: inherit;
  justify-content: inherit;
  justify-items: inherit;
  align-content: inherit;
  align-items: inherit;
`;

export default Container;
