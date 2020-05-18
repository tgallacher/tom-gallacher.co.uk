import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies

const GlobalStyle = createGlobalStyle`
  ${tw`font-sans`};

  a {
    ${tw`text-yellow-500`};

    :hover {
      ${tw`text-yellow-300`};
    }
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }

  th,
  td {
    text-align: left;
    border-bottom-style: solid;
  }

  ol,
  ul { ${tw`my-4`}; }

  li {
    ${tw`list-disc ml-5 leading-8`};
  }

  p { ${tw`my-4`} }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 { ${tw`font-bold mb-2 mt-8`}; }

  h1 { ${tw`text-5xl mb-4 mt-16`}; }
  h2 { ${tw`text-4xl mb-3 mt-16`}; }
  h3 { ${tw`text-3xl`}; }
  h4 { ${tw`text-2xl`}; }
  h5 { ${tw`text-xl`}; }
  h6 { ${tw`text-lg`}; }
`;

export default GlobalStyle;
