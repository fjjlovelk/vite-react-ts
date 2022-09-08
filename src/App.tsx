import { useState } from 'react';
import { useRootDispatch, useRootState } from '@/hooks/redux';
import reactLogo from './assets/react.svg';
import './styles/App.css';
import { toggleSideOpen } from '@/redux/features/appSlice';

function App() {
  const [count, setCount] = useState(0);
  useRootState(state => {
    console.log(state);
  });
  const sideOpen = useRootState(state => String(state.app.sideOpen));
  const dispatch = useRootDispatch();

  return (
    <div className="App">
      <div>{sideOpen}</div>
      <button onClick={() => dispatch(toggleSideOpen())}>点我切换</button>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
