import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target})=>{
        setinputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [...categories,inputValue]);
        onNewCategory(inputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>    
    )
}