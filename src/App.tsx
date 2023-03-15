import React, { FC, useState } from 'react';

import AddVyntuForm from './components/AddVyntuForm';
import DisplayVyntus from './components/DisplayVyntus';
import Vyntu from './models/Vyntu';
import './App.css';


const App: FC = () => {
  const [vyntusList, setVyntusList] = useState<Vyntu[]>([]);

  const addVyntu = (newVyntu: Vyntu) => {
    setVyntusList([...vyntusList, newVyntu]);
  }

  const updateVyntu = (newVyntu: Vyntu) => {
    setVyntusList(vyntusList.map((vyntu) => 
      (vyntu.id === newVyntu.id ? newVyntu : vyntu)));
  }

  const deleteVyntu = (id: number) => {
    const newVyntusList = vyntusList.filter(vyntu => vyntu.id !== id);
    setVyntusList(newVyntusList);
  }

  console.log('vyntusList ', vyntusList);

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Maryan Vyntu</span>
        <AddVyntuForm 
          addVyntu={addVyntu}
        />

        <DisplayVyntus 
          vyntusList={vyntusList}
          deleteVyntu={deleteVyntu}
          updateVyntu={updateVyntu}
        />Front-End-Developer
      </div>
    </div>
  );
}

export default App;

// =============================================================
