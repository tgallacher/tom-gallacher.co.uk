import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies

const PrismStyle = createGlobalStyle`
  code {
    ${tw`font-mono bg-yellow-400`};
    font-size: inherit;
  }

  blockquote {
    ${tw`bg-gray-800`};
    ${tw`border-yellow-400 border-solid border-l-4`};
    ${tw` m-0 py-2 px-4 my-4`};

    p {
      ${tw`m-0`};
    }
  }

  pre[class*='language-'] {
    padding: 0;
    margin: 1em 0;
  }

  /* Code blocks */
  pre[class*='language-'] {
    ${tw`bg-gray-900 rounded-none`};
  }

  code[class*='language-'] {
    text-shadow: none;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    ${tw`text-gray-600 italic`};
  }

  /* inline-code */
  :not(pre) > code[class*='language-'] {
    ${tw`bg-yellow-300 text-gray-900 px-2 py-1 inline-block`};
    ${tw`rounded-none`};
    text-shadow: none;
  }

  /* Remove excessive padding between number + right bar */
  .line-numbers-rows span {
    padding-right: 0;
  }

  /* Reduce white space before code */
  pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  .gatsby-highlight {
    ${tw`my-8`};
  }

  .gatsby-highlight-code-line {
    ${tw`bg-text-gray-800`};
    display: block;
    margin: 0 -0.7em;
    padding-right: 1em;
    padding-left: 0.35em;
  }
`;

export default PrismStyle;