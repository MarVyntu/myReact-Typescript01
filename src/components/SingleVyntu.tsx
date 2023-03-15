import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import EditVyntuForm from './EditVyntuForm';
import Vyntu from '../models/Vyntu';


interface SingleVyntuProps {
  vyntu: Vyntu;
  updateVyntu: (newVyntu: Vyntu) => void;
  deleteVyntu: (id: number) => void;
}

const SingleVyntu: FC<SingleVyntuProps> = 
({ vyntu, updateVyntu, deleteVyntu }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    deleteVyntu(vyntu.id);
  }
  

  return (
    <div className="vyntu">

      <img src={`/images/${vyntu.img}`} alt={vyntu.title}/>
      <h2>{vyntu.title}</h2>
      <span>{vyntu.price} $</span>

      <div className="vyntu-controls">
        <AiFillEdit onClick={handleToggleEdit}/>
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit
        ? <EditVyntuForm 
            data={vyntu}
            updateVyntu={updateVyntu}
            handleToggleEdit={handleToggleEdit}
          />
        : null}
     
    </div>
  )
}

export default SingleVyntu;