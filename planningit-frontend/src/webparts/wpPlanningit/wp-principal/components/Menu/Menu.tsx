import { WebPartContext } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import { MenuContainer } from './Menustyles';
import { Link } from 'react-router-dom';

import WebPartPlannningIT from '../../WpPlanningit';
import BINewForm from '../BINewForm/NovoBIForm';
import Consulta from '../Search/Search';
import BIDetails from '../BIDetails/BIDetails';
import RealocarBudget from '../ReallocateBudget/ReallocateBudget';
import Scenario from '../Scenario/Scenario';
import CreateScenario from '../CreateScenario/CreateScenario';
import UploadFiles from '../UploadFiles/UploadFiles';

export interface IProps {
  iconUrl: string;
}

const Menu: React.FC<IProps> = (props) => {
  return (
    <MenuContainer>
      <ul>
        <li>
          <img src={`${props.iconUrl}/begin-icon.png`} />
          <Link to="#/">Inicio</Link>
        </li>
        <li>
          <img src={`${props.iconUrl}/add-bi-icon.png`} />
          <Link to="#/NovoBIForm">Novo BI</Link>
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
    </MenuContainer>
  );
};

export default Menu;
