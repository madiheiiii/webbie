import {useFloating} from '@floating-ui/react';
import './App.css'

export default function App() {
  const {tiny1, floatingStyles} = useFloating();
  return (
    <>
      <div ref={refs.setFloating} style={floatingStyles}>
        <img src="/frontend/components/tiny1.png" alt="info" width={40} />
      </div>
    </>
  );
}