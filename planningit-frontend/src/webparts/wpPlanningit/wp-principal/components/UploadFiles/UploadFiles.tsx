import *  as React from 'react';
import { useState } from 'react';
import styles from './UploadFiles.module.scss';

import Upload from './Uploader/index';

interface FileProps {
  file: File;
  name: string;
}

const Consulta: React.FC<any> = () => {
  const [filesCapexDisp, setfilesCapexDisp] = useState(null);
  const [filesCapexVal, setfilesCapexVal] = useState(null);
  const [filesOpexVal, setfilesOpexVal] = useState(null);

  console.log(filesCapexDisp);

  return (
    <>
      <form action="">
        <div className={styles.title}>
          <strong>Capex</strong>
        </div>
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>Disposto</label>
            <div className={styles.fileUpload}>
              <input type='file' id="id-disposto-capex" onChange={(e) => setfilesCapexDisp(e.target.value)} />
              <div className={styles.buttonUpload}>Anexar arquivos</div>
              <div>
                {filesCapexDisp}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>Valoração</label>
            <div className={styles.fileUpload}>
              <input type='file' id="id-valoracao-capex" />
              <div className={styles.buttonUpload}>Anexar arquivos</div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>Selecione o cenário a ser atualizado</label>
            <select name="Cenario Capex" id="id-cenario-capex">
              <option value="1">Matriz 2021</option>
              <option value="2">Matriz 2020</option>
              <option value="3">Matriz 2019</option>
              <option value="4">Matriz 2018</option>
            </select>
          </div>
          <div className={styles.rowBtnPesquisar}>
            <button>Enviar</button>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}></div>
        <div className={styles.title}>
          <strong>Opex</strong>
        </div>
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>Disposto</label>
            <div className={styles.fileUpload}>
              <input type='file' id="id-disposto-opex" />
              <div className={styles.buttonUpload}>Anexar arquivos</div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.flex1}>
            <label>Selecione o cenário a ser atualizado</label>
            <select name="Cenario Opex" id="id-cenario-opex">
              <option value="1">Matriz 2021</option>
              <option value="2">Matriz 2020</option>
              <option value="3">Matriz 2019</option>
              <option value="4">Matriz 2018</option>
            </select>
          </div>
          <div className={styles.rowBtnPesquisar}>
            <button>Enviar</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Consulta;
