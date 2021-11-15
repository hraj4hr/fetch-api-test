import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import WithListLoading from './components/WithListLoading';
function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  const style = {
    color: 'green',
    fontSize: 80
  };

  const honorName = {
    color: 'blue',
    fontSize: 20
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1 style={style}>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by   
          <h1 style={honorName}>  Hansaraj Bharati</h1>
        </div>
      </footer>
    </div>
  );
}
export default App;