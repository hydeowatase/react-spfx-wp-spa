import styled, { css } from 'styled-components';

export const Container = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 5px;

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
