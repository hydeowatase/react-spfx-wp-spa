import styled, { css } from 'styled-components';

export const Container = styled.div`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
      text-rendering: optimizeLegibility !important;
      -webki-font-smoothig: antialiased !important;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

      }
`;
