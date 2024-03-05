import styles from './index.module.css';
import sqlLogo from './assets/sql-server.png';
import { useState } from 'react';

function App() {
  const [queryDescribtion, setQueryDescribtion] = useState();

  const onSubmit = e => {
    e.preventDefault();
    console.log('Submiited form', queryDescribtion);
  };
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt='' className='styles.icon' />
      <h3>Generate SQL with AI Chat GPT v3.5</h3>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='query-description'
          placeholder='Describe your SQL Query'
          onClick={e => setQueryDescribtion(e.target.value)}
        />
        <input type='submit' value='Generate Query' />
      </form>
    </main>
  );
}

export default App;
