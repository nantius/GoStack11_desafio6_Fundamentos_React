import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => {
      const location = useLocation();
      if (location.pathname === '/import') {
        return css`
          a:nth-child(2) {
            border-bottom: 3px solid orange;
            padding-bottom: 12px;
          }
        `;
      }
      return css`
        a:nth-child(1) {
          border-bottom: 3px solid orange;
          padding-bottom: 12px;
        }
      `;
    }}

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
