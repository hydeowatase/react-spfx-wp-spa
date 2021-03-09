import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import WebPartPlannningIT from '../WpPlanningit';
import BINewForm from '../components/BINewForm/NovoBIForm';
import Consulta from '../components/Search/Search';
import BIDetails from '../components/BIDetails/BIDetails';
import RealocarBudget from '../components/ReallocateBudget/ReallocateBudget';
import Scenario from '../components/Scenario/Scenario';
import CreateScenario from '../components/CreateScenario/CreateScenario';
import UploadFiles from '../components/UploadFiles/UploadFiles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="#/" exact component={WebPartPlannningIT}></Route>
      <Route path="#/BINewForm" component={BINewForm} />
      <Route path="#/Consulta" component={Consulta} />
      <Route path="#/BIDetails" component={BIDetails} />
      <Route path="#/RealocarBudget" component={RealocarBudget} />
      <Route path="#/Scenario" component={Scenario} />
      <Route path="#/CreateScenario" component={CreateScenario} />
      <Route path="#/UploadFiles" component={UploadFiles} />
    </Switch>
  );
};

export default Routes;
