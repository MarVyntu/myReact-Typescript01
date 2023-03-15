import React, { FC } from 'react';
import SingleVyntu from './SingleVyntu';
import Vyntu from '../models/Vyntu';


interface DisplayVyntusProps {
  vyntusList: Vyntu[];
  updateVyntu: (newVyntu: Vyntu) => void;
  deleteVyntu: (id: number) => void;
}

const DisplayVyntus: FC<DisplayVyntusProps> = 
({ vyntusList, updateVyntu, deleteVyntu }) => {
  return (
    <div className="container">
      {vyntusList.map((vyntu) => {
        return <SingleVyntu 
                  key={vyntu.id} 
                  deleteVyntu={deleteVyntu}
                  updateVyntu={updateVyntu}
                  vyntu={vyntu} />
      })}
    </div>
  )
}

export default DisplayVyntus;


