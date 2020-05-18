/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies

const Hbase = styled.h3`
  ${tw`font-bold mt-4 mb-8`};
`;

export const H1 = styled(Hbase)`
  ${tw`text-5xl mt-4 mb-16`};
`;
H1.defaultProps = {
  as: 'h1'
};

export const H2 = styled(Hbase)`
  ${tw`text-4xl mt-3 mb-16`};
`;
H2.defaultProps = {
  as: 'h2'
};

export const H3 = styled(Hbase)`
  ${tw`text-3xl`};
`;
H3.defaultProps = {
  as: 'h3'
};

export const H4 = styled(Hbase)`
  ${tw`text-2xl`};
`;
H4.defaultProps = {
  as: 'h4'
};

export const H5 = styled(Hbase)`
  ${tw`text-xl`};
`;
H5.defaultProps = {
  as: 'h5'
};

export const H6 = styled(Hbase)`
  ${tw`text-lg`};
`;
H6.defaultProps = {
  as: 'h6'
};
