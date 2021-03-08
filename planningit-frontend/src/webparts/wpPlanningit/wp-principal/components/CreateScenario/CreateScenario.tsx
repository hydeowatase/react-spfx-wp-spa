import *  as React from 'react';
import styles from './CreateScenario.module.scss';

const Consulta: React.FC<any> = () => {
  return (
    <>
      <form action="">
        <div className={styles.contentform}>
          <div className={styles.row}>
            <div className={styles.flex1}>
              <label>Selecione o cenário a ser usado como base</label>
              <select name="cenario" id="id-cenario">
                <option value="matriz-2021">Matriz 2021</option>
                <option value="matriz-2020">Matriz 2020</option>
                <option value="matriz-2019">Matriz 2019</option>
              </select>
            </div>
            <div className={styles.flex1}>
              <label>Ano</label>
              <input type="text" placeholder="2021" name="ano-cenario" id="id-ano-cenario" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.flex1}>
              <label>Nome do Marco</label>
              <input type="text" name="Nome do Marco" id="id-nome-marco" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.flex1}>
              <label>Cenário Principal</label>
              <input type="checkbox" name="Cenário Principal" id="id-cenario-principal" />
            </div>
          </div>

          <div className={styles.rowBtn}>
            <button className={styles.btnCancel}>Cancelar</button>
            <button>Realocar</button>
          </div>
        </div>
      </form>
    </>

  );
};

export default Consulta;
