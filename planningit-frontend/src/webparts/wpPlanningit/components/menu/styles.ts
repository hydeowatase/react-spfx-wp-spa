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

    a {
      font-size: 24px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;

        & + li {
          margin-top: 14px;
        }

        cursor: pointer;

        &:hover {
          transform: translateX(10px);
          transition-duration: 0.5s
        }
      }
    }

    img {
      margin-right: 8px;
      height: 24px;
      width: 24px;
    }
`;
