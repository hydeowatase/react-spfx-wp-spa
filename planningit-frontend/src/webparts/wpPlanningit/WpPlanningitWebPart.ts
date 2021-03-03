import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'WpPlanningitWebPartStrings';
import WpPlanningit from './wp-principal/WpPlanningit';
import { IWpPlanningitProps } from './wp-principal/IWpPlanningitProps';

export interface IWpPlanningitWebPartProps {
  description: string;
  listIconUrl: string;
}

export default class WpPlanningitWebPart extends BaseClientSideWebPart<IWpPlanningitWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWpPlanningitProps> = React.createElement(
      WpPlanningit,
      {
        description: this.properties.description,
        listIconUrl: " ativosdosite/images",
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
