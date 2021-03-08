import *  as React from 'react';
import styles from './Scenario.module.scss';

import { FiXCircle } from 'react-icons/fi'

const Consulta: React.FC<any> = () => {
  return (
    <>
      <form action="">
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>BI</label>
            <input type="text" name="BI" id="id-bi" />
          </div>
          <div className={styles.rowBtnPesquisar}>
            <button>Pesquisar</button>
          </div>
        </div>
      </form>
      <div className={styles.gridResultado}>
        <div className={styles.gridResultadoHead}><span>Nome</span></div>
        <div className={styles.gridResultadoHead}><span>Linhas</span></div>
        <div className={styles.gridResultadoHead}><span>Valor</span></div>
        <div className={styles.gridResultadoHead}><span></span></div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.fieldBtnClose}>
          <FiXCircle className={styles.btnClose} size={24} />
        </div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.fieldBtnClose}>
          <FiXCircle className={styles.btnClose} size={24} />
        </div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.fieldBtnClose}>
          <FiXCircle className={styles.btnClose} size={24} />
        </div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.fieldBtnClose}>
          <FiXCircle className={styles.btnClose} size={24} />
        </div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.fieldBtnClose}>
          <FiXCircle className={styles.btnClose} size={24} />
        </div>
      </div>
      <div className={styles.rowBtnExportar}>
        <button>Criar Cenário</button>
      </div>
    </>

  );
};

export default Consulta;
