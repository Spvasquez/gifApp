import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

//este hook sirve para cambiar el estado de un componente, el primer argumento recibe lo que hay en el useStae y el segundo lo cambia
    const [inputValue, setInputValue] = useState('')

    const onInputChange=(event)=>{
       setInputValue(event.target.value)
    }
    const onSubmit=(event)=>{
        //evitar que la pagina se refresque cuando se hace un submit en un form
        event.preventDefault();
        if(inputValue.trim().length<=1) return;

        // setCategories(cat=>[inputValue,...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
    <input type="text" value={inputValue} onChange={onInputChange} placeholder="buscar gif's"/>
    </form>
  )
}
