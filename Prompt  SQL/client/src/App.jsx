import styles from './index.module.css';
import sqlLogo from './assets/sql-server.png';

function App() {
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt='' className='styles.icon' />
      <h3>Generate SQL with Chat GPT v3.5 AI</h3>

      <form>
        <input
          type='text'
          name='query-description'
          placeholder='Describe Your SQL Query'
        />
        <input type='submit'>Generate Query</input>
      </form>
    </main>
  );
}

export default App;
