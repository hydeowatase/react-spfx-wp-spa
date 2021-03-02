import * as React from 'react';
import styles from './WpPlanningit.module.scss';
import { IWpPlanningitProps } from './IWpPlanningitProps';
import { escape } from '@microsoft/sp-lodash-subset';

import Menu from '../menu/index';

const WpPlanningit: React.FC<IWpPlanningitProps> = (props) => {
  return (
    <>
    <Menu iconUrl={`${props.context.pageContext.web.absoluteUrl}/${props.listIconUrl}`.replace(/\s/g, "")}/>
    </>
  );
}

export default WpPlanningit;
