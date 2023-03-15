import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import Vyntu from '../models/Vyntu';
import './styles.css';


interface AddVyntuFormProps {
  addVyntu: (newVyntu: Vyntu) => void;
}

const initState = {
  title: '',
  price: '',
  img: '',
}

const AddVyntuForm: FC<AddVyntuFormProps> = ({ addVyntu }) => {
  const [newVyntu, setNewVyntu] = 
    useState<{title: string, price: string, img: string}>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setNewVyntu({
      ...newVyntu,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, price, img } = newVyntu;

    if (title && price && img) {
      addVyntu({
        title,
        img,
        price: Number(price),
        id: Date.now()
      });
      setNewVyntu(initState);
    }
  }

  console.log('new vyntu ', newVyntu)

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title"
        type="text"
        placeholder="Title of work"
        onChange={handleChange}
        value={newVyntu.title}
      />
      <input 
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={newVyntu.price}
      />
      <input 
        name="img"
        type="text"
        placeholder="Image of work"
        onChange={handleChange}
        value={newVyntu.img}
      />
      <button type="submit">
        + Add to favorites
      </button>
    </form>
  )
}


export default AddVyntuForm;