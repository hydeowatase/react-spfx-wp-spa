import * as React from 'react';
import BINewFormStyles from './BINewForm.module.scss';

const NovoBIform: React.FC<any> = () => {
  return (
    <>
      <form id="formulario" action="">
        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>BI</label>
            <input type="text" name="BI" id="id-bi" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Bi Origem</label>
            <input type="text" name="BI Origem" id="id-bi-origem" />
          </div>
        </div>

        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Capex Source</label>
            <input type="text" name="Capex Source" id="id-capex-source" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Directorship</label>
            <input type="text" name="Directorship" id="id-directorship" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Macro Project (Projeto SAP)</label>
            <input type="text" name="Macro Project" id="id-macro-project" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Project (Project Industrial)</label>
            <input type="text" name="Project" id="is-project-industrial" />
          </div>
        </div>

        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>RGT (Layer SubArea SAP)</label>
            <input type="text" name="RGT" id="is-rgt-layer-subarea-sap)<" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Area CTIO</label>
            <input type="text" name="Area CTIO" id="is-area-ctio" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>SubArea CTIO</label>
            <input type="text" name="SubArea CTIO" id="id-subarea-ctio" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Type (Category NW)</label>
            <input type="text" name="Type" id="id-type-category-nw" />
          </div>
        </div>

        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Investment Tree (Element)</label>
            <input type="text" name="Investment Tree Element " id="id-investment-tree-element" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Investment Tree (Detail)</label>
            <input type="text" name="Investment Tree Detail" id="id-investment-tree-detail" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Element Detail</label>
            <input type="text" name="Element Detail" id="id-element-detail" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Description</label>
            <input type="text" name="Description" id="id-description" />
          </div>
        </div>

        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Main Vendor</label>
            <input type="text" name="Main Vendor" id="id-main-vendor" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>KPI</label>
            <input type="text" name="KPI" id="id-kpi" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>QTY</label>
            <input type="text" name="QTY" id="id-qty" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>HW_LBO</label>
            <input type="text" name="HW_LBO" id="id-hw-lbo" />
          </div>
        </div>

        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>SW_LBO</label>
            <input type="text" name="SW_LBO" id="id-sw-lbo" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>SE_LBO</label>
            <input type="text" name="SE_LBO" id="id-se-lbo" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Capex_LBO</label>
            <input type="text" name="Capex_LBO" id="id-capex_lbo" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Capex</label>
            <input type="text" name="Capex" id="id-capex" />
          </div>
        </div>

        <div className={BINewFormStyles.row}>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Discount (%)</label>
            <input type="text" name="Discount" id="id-discount" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Capex Total</label>
            <input type="text" name="Capex Total" id="id-capex-total" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Project CAC</label>
            <input type="text" name="Project CAC" id="id-project-cac" />
          </div>
          <div className={`${BINewFormStyles.flex1}`}>
            <label>Responsável</label>
            <input type="text" name="Responsavel" id="id-responsavel" />
          </div>
        </div>
        <div className={BINewFormStyles.rowBtn}>
          <button>{'>'}</button>
        </div>
      </form>
    </>
  );
};

export default NovoBIform;
