import * as React from "react";
import { IWpPlanningitProps } from "./IWpPlanningitProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FiAlignJustify, FiPlusCircle, FiSearch, FiCopy, FiUpload } from "react-icons/fi";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  NavLink,
  Redirect,
  HashRouter,
} from "react-router-dom";

import Mainstyles from "./WpPlanningit.module.scss";
import Menustyles from "./Menustyles.module.scss";

import Menu from "./components/Menu/Menu";
import BINewForm from "./components/BINewForm/BINewForm";
import Consulta from "./components/Search/Search";
import BIDetails from "./components/BIDetails/BIDetails";
import RealocarBudget from "./components/ReallocateBudget/ReallocateBudget";
import Scenario from "./components/Scenario/Scenario";
import CreateScenario from "./components/CreateScenario/CreateScenario";
import UploadFiles from "./components/UploadFiles/UploadFiles";

const WpPlanningit: React.FC<IWpPlanningitProps> = (props) => {
  const listBaseUrl = `${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(
    /\s/g,
    ""
  );
  const rootUrl =
    "/sites/jh-dev-planningit/SitePages/Teste.aspx?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js";

  return (
    <HashRouter>
      <div className={Mainstyles.wpPlanningitContainer}>
        <div className={Mainstyles.wpPlanningitContent}>
          {/* <Menu iconUrl={`${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(/\s/g, "")} /> */}
          <div className={Menustyles.MenuContainer}>
            <nav className={Menustyles.navbar}>
              <ul className={Menustyles.navbarnav} >
                <li className={Menustyles.navbaritem}>
                  <NavLink className={Menustyles.navlink} to="/">
                    <div className={Menustyles.icon}><FiAlignJustify size={30} /></div>
                    <span className={Menustyles.linktext}>Inicio</span>
                  </NavLink>
                </li>
                <li className={Menustyles.navbaritem}>
                  <NavLink className={Menustyles.navlink} to="/BINewForm">
                    <div className={Menustyles.icon}><FiPlusCircle size={30} /></div>
                    <span className={Menustyles.linktext}>Novo BI</span>
                  </NavLink>
                </li>
                <li className={Menustyles.navbaritem}>
                  <NavLink className={Menustyles.navlink} to="/Consulta">
                    <div className={Menustyles.icon}><FiSearch size={30} /></div>
                    <span className={Menustyles.linktext}>Consulta</span>
                  </NavLink>
                </li>
                <li className={Menustyles.navbaritem}>
                  <NavLink className={Menustyles.navlink} to="/Scenario">
                    <div className={Menustyles.icon}><FiCopy size={30} /></div>
                    <span className={Menustyles.linktext}>Cenários</span>
                  </NavLink>
                </li>
                <li className={Menustyles.navbaritem}>
                  <NavLink className={Menustyles.navlink} to="/UploadFiles">
                    <div className={Menustyles.icon}><FiUpload size={30} /></div>
                    <span className={Menustyles.linktext}>Atualizar Base</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={Mainstyles.mainArea}>
            <Switch>
              <Route path="/" exact>
                {<div>home</div>}
              </Route>
              <Route path="/BINewForm" component={BINewForm} />
              <Route path="/Consulta" component={Consulta}></Route>
              <Route path="/BIDetails" component={BIDetails}></Route>
              <Route path="/RealocarBudget" component={RealocarBudget}></Route>
              <Route path="/Scenario" component={Scenario}></Route>
              <Route path="/CreateScenario" component={CreateScenario}></Route>
              <Route path="/UploadFiles" component={UploadFiles}></Route>
              <Redirect path="*" to={"/"} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default WpPlanningit;
