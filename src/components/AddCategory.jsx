import { useState } from "react";

//Se recibe la funcion que contiene el evento padre
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        const value = inputValue.trim();
        if(value.length <= 1) return;

        setInputValue('');

        onNewCategory(value);//Se ejecuta la función del evento padre
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}// Evento que se controla
            />
        </form>
    )
};