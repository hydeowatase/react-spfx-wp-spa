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
          <img src={`${props.iconUrl}/dashed-icon.png`} />
          <span>Inicio</span>
        </li>
        <li>
          <img src={`${props.iconUrl}/dashed-icon.png`} />
          <span>Novo BI</span>
        </li>
        <li>
          <img src={`${props.iconUrl}/dashed-icon.png`} />
          <span>Consultar</span>
        </li>
        <li>
          <img src={`${props.iconUrl}/dashed-icon.png`} />
          <span>Cenários</span>
        </li>
        <li>
          <img src={`${props.iconUrl}/dashed-icon.png`} />
          <span>
            Atualizar Base
          </span>
        </li>
      </ul>
    </Container>
  );
}

export default Menu;
