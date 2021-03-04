import *  as React from 'react';
import styles from './RealocarBudget.module.scss';

const Consulta: React.FC<any> = () => {
  return (
    <>
      <form action="">
        <div className={styles.column}>
          <div className={styles.flex1}>
            <label>BI Origem</label>
            <input type="text" name="BI Origem" id="id-bi-origem" />
          </div>
          <div className={styles.flex1}>
            <label>HW_LBO</label>
            <input type="text" name="HW_LBO" id="id-hw-lbo-origem" />
          </div>
          <div className={styles.flex1}>
            <label>SW_LBO</label>
            <input type="text" name="SW_LBO" id="id-sw-lbo-origem" />
          </div>
          <div className={styles.flex1}>
            <label>SE_LBO</label>
            <input type="text" name="SE_LBO" id="id-se-lbo-origem" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.flex1}>
            <label>BI Destino</label>
            <input type="text" name="BI Origem" id="id-bi-destino" />
          </div>
          <div className={styles.flex1}>
            <label>HW_LBO</label>
            <input type="text" name="HW_LBO" id="id-hw-lbo-destino" />
          </div>
          <div className={styles.flex1}>
            <label>SW_LBO</label>
            <input type="text" name="SW_LBO" id="id-sw-lbo-destino" />
          </div>
          <div className={styles.flex1}>
            <label>SE_LBO</label>
            <input type="text" name="SE_LBO" id="id-se-lbo-destino" />
          </div>
        </div>
      </form>
      <div className={styles.rowBtnExportar}>
        <button>Cancelar</button>
        <button>Realocar</button>
      </div>
    </>

  );
};

export default Consulta;
