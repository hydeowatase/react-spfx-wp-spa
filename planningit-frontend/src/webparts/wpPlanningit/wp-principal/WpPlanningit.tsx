import * as React from 'react';
import styles from './WpPlanningit.module.scss';
import { IWpPlanningitProps } from './IWpPlanningitProps';
import { escape } from '@microsoft/sp-lodash-subset';

import Menu from './components/Menu/index';
import BINewForm from './components/BINewForm/NovoBIForm';
import Consulta from './components/Search/Search';
import BIDetails from './components/BIDetails/BIDetails';
import RealocarBudget from './components/ReallocateBudget/ReallocateBudget';
import Scenario from './components/Scenario/Scenario';

const WpPlanningit: React.FC<IWpPlanningitProps> = (props) => {
  return (
    <>
      <div className={styles.wpPlanningitContainer}>
        <div className={styles.wpPlanningitContent}>
          <Menu iconUrl={`${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(/\s/g, "")} />
          <div className={styles.mainArea}>
            <Scenario className={styles.mainArea} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WpPlanningit;
