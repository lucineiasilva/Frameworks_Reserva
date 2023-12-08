import Container from "../Container";
import styles from "./styles.module.css";

export default function Form({ handleFormSubmit, children, onClick, onChange, onSubmit, value, ...props}) {


  return (
    <Container>
      <form onSubmit={onSubmit} {...props}>
        <div className={styles.content}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={value.descricao}
            name="descricao"
            onChange={onChange.descricao}
          />
        </div>
        <div className={styles.content}>
          <label htmlFor="solicitante">Solicitante</label>
          <input
            type="text"
            id="solicitante"
            value={value.solicitante}
            name="solicitante"
            onChange={onChange.solicitante}
            
          />
        </div>
        <div className={styles.content}>
          <label htmlFor="sala">Sala</label>
          <select
            id="sala"
            name="sala"
            value={value.sala}
            onChange={onChange.sala}
          >
            <option value={""} disabled>
              Sala
            </option>
            <option value="Laboratório de Informática I">
            Laboratório de Informática I
            </option>
            <option value="Laboratório de Informática II">
            Laboratório de Informática II
            </option>
            <option value="Laboratório de Informática III">
            Laboratório de Informática III
            </option>
            <option value="Laboratório de Informática IV">
            Laboratório de Informática IV
            </option>
          </select>
        </div>
        <div className={styles.content}>
          <label>Início</label>
          <input
            type="datetime-local"
            value={value.inicio}
            onChange={onChange.inicio}
          />
        </div>
        <div className={styles.content}>
          <label>Fim</label>
          <input
            type="datetime-local"
            value={value.fim}
            onChange={onChange.fim}
          />
        </div>
        <div className={styles.checkBox}>
          <input
            type="checkbox"
            value={value.termos}
            onChange={onChange.termos}
          />
          <label>Concordo com os termos!</label>
        </div>
        <div className={styles.content_button}>
          <button onClick={onClick}>Reservar Sala</button>
        </div>
      </form>
      {children}
    </Container>
  );
}
