import * as React from 'react';
import styles from './WpPlanningit.module.scss';
import { IWpPlanningitProps } from './IWpPlanningitProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';

import Menu from './components/Menu/Menu';

const WpPlanningit: React.FC<IWpPlanningitProps> = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.wpPlanningitContainer}>
        <div className={styles.wpPlanningitContent}>
          <Menu iconUrl={`${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(/\s/g, "")} />
          <div className={styles.mainArea}>
            <Routes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default WpPlanningit;
