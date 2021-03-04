import styled, { css } from 'styled-components';

export const Container = styled.div`

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;

        a {
           font-size: 20px;
          }

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
