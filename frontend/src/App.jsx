import {useFloating} from '@floating-ui/react';
import {useState, useEffect} from 'react';
import './App.css'
import MainWindow from './components/MainWindow';

export default function App() {
  const [mainWindow, setMainwindow] = useState(false);
  function click(){


  }
  return (
    <div className="desktop">
        <button onClick={() => setMainwindow(!mainWindow)}>
    </button>
    {}
    </div>
  );
}