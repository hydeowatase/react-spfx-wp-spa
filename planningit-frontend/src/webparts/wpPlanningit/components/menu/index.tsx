import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import { Container } from './styles';

export interface IProps {
  iconUrl: string;
}

const Menu: React.FC<IProps> = (props) => {
  return (
    <Container>
      <ul>
        <li>
          <img src={`${props.iconUrl}/begin-icon.png`} />
          <a>Inicio</a>
        </li>
        <li>
          <img src={`${props.iconUrl}/add-bi-icon.png`} />
          <a>Novo BI</a>
        </li>
        <li>
          <img src={`${props.iconUrl}/search-bi-icon.png`} />
          <a>Consultar</a>
        </li>
        <li>
          <img src={`${props.iconUrl}/scenario-icon.png`} />
          <a>Cenários</a>
        </li>
        <li>
          <img src={`${props.iconUrl}/update-scenario-icon.png`} />
          <a>
            Atualizar Base
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
