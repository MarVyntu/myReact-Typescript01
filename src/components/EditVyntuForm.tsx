import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import Vyntu from '../models/Vyntu';
import './styles.css';


interface EditVyntuFormProps {
  data: Vyntu;
  updateVyntu: (newVyntu: Vyntu) => void;
  handleToggleEdit: () => void;
}


const EditVyntuForm: FC<EditVyntuFormProps> = 
({ data, updateVyntu, handleToggleEdit }) => {
  const [editVyntu, setEditVyntu] = 
    useState<Vyntu>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setEditVyntu({
      ...editVyntu,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, price, img } = editVyntu;

    if (title && price && img) {
      updateVyntu(editVyntu);
      handleToggleEdit();
    }
  }

  console.log('edit vyntu', editVyntu)

  return (
    <form 
      className="edit-form"
      onSubmit={handleSubmit}>
      <input 
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={editVyntu.title}
      />
      <input 
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={editVyntu.price}
      />
      <input 
        name="img"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={editVyntu.img}
      />
      <button type="submit">
      Confirm
      </button>
    </form>
  )
}


export default EditVyntuForm;