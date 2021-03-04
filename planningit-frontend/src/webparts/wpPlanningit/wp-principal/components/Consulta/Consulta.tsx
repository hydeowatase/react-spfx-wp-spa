import *  as React from 'react';
import styles from './Consulta.module.scss';

const Consulta: React.FC<any> = () => {
  return (
    <>
      <form action="">
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>BI</label>
            <input type="text" name="BI" id="id-bi" />
          </div>
          <div className={styles.flex1}>
            <label>Projeto CAC</label>
            <input type="text" name="Projeto CAC" id="id-projeto-cac" />
          </div>
          <div className={styles.flex1}>
            <label>Diretoria</label>
            <input type="text" name="Diretoria" id="id-diretoria" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>Área</label>
            <input type="text" name="Area" id="id-area" />
          </div>
          <div className={styles.flex1}>
            <label>Investment Tree</label>
            <input type="text" name="Investment Tree" id="id-investment-tree" />
          </div>
          <div className={styles.flex1}>
            <label>Responsável</label>
            <input type="text" name="Responsavel" id="id-responsavel" />
          </div>
        </div>
        <div className={styles.rowBtnPesquisar}>
          <button>Pesquisar</button>
        </div>
      </form>
      <div className={styles.gridResultado}>
        <div className={styles.gridResultadoHead}><span>BI</span></div>
        <div className={styles.gridResultadoHead}><span>DirectorShip</span></div>
        <div className={styles.gridResultadoHead}><span>Macro Project</span></div>
        <div className={styles.gridResultadoHead}><span>Investment Tree</span></div>
        <div className={styles.gridResultadoHead}><span>Área</span></div>
        <div className={styles.gridResultadoHead}><span>Responsável</span></div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        {/* Linha BI */}
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
        <div className={styles.gridResultadoItem}><span>---</span></div>
      </div>
      <div className={styles.rowBtnExportar}>
        <button>Exportar</button>
      </div>
    </>

  );
};

export default Consulta;
