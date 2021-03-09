import * as React from 'react';
import { IWpPlanningitProps } from './IWpPlanningitProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect, HashRouter } from 'react-router-dom';

import Mainstyles from './WpPlanningit.module.scss';
import { MenuContainer } from './Menustyles';


import Menu from './components/Menu/Menu';
import BINewForm from './components/BINewForm/BINewForm';
import Consulta from './components/Search/Search';
import BIDetails from './components/BIDetails/BIDetails';
import RealocarBudget from './components/ReallocateBudget/ReallocateBudget';
import Scenario from './components/Scenario/Scenario';
import CreateScenario from './components/CreateScenario/CreateScenario';
import UploadFiles from './components/UploadFiles/UploadFiles';

const WpPlanningit: React.FC<IWpPlanningitProps> = (props) => {
  const listBaseUrl = `${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(/\s/g, "");
  const rootUrl = "/sites/jh-dev-planningit/SitePages/Teste.aspx?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js";

  return (
    <HashRouter>
      <div className={Mainstyles.wpPlanningitContainer}>
        <div className={Mainstyles.wpPlanningitContent}>
          {/* <Menu iconUrl={`${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(/\s/g, "")} /> */}
          <MenuContainer>
            <ul>
              <li>
                <img src={`${listBaseUrl}/begin-icon.png`} />
                <NavLink to="">Inicio</NavLink>
              </li>
              <li>
                <img src={`${listBaseUrl}/add-bi-icon.png`} />
                <NavLink to="/BINewForm">Novo BI</NavLink>
              </li>
              <li>
                <img src={`${listBaseUrl}/search-bi-icon.png`} />
                <NavLink to="/Consulta">Consulta</NavLink>
              </li>
              <li>
                <img src={`${listBaseUrl}/scenario-icon.png`} />
                <a>Cenários</a>
              </li>
              <li>
                <img src={`${listBaseUrl}/update-scenario-icon.png`} />
                <a>
                  Atualizar Base
                  </a>
              </li>
            </ul>
          </MenuContainer>
          <div className={Mainstyles.mainArea}>
            <Switch>
              <Route path="/" exact >
                {<div>home</div>}
              </Route>
              <Route path="/BINewForm" component={BINewForm} />
              <Route path="/Consulta" component={Consulta}></Route>
              <Route path="/BIDetails" component={BIDetails} ></Route>
              <Route path="/RealocarBudget" component={RealocarBudget} ></Route>
              <Route path="/Scenario" component={Scenario} ></Route>
              <Route path="/CreateScenario" component={CreateScenario} ></Route>
              <Route path="/UploadFiles" component={UploadFiles} ></Route>
              <Redirect path="*" to={'/'} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};


export default WpPlanningit;
