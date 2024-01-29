import { useState } from "react";
import imageScr from "../assets/images.png"


        

export const AddCategory = ({onNewCategory}) => {

 const [inputValue, setInputValue] = useState('Lands');  
  
    const onInputChange = ({target}) => {
    
    console.log(target.value);
    setInputValue(target.value)

    

  }

  const onFormSubmit = (e) => {


    e.preventDefault()

   if (inputValue.trim().length <= 1) {

      if (inputValue.trim().length == 0) document.getElementById('repeated-value').innerHTML = "Please Type New Category"
      if (inputValue.trim().length == 1) document.getElementById('repeated-value').innerHTML = "Please Type 2 o more Characters"
    return
    }

 
   
    onNewCategory( inputValue.trim() )

    setInputValue('')

        console.log(e);

  }

const onKeyDown = () => {

  document.getElementById('repeated-value').innerHTML = ""
  // document.getElementById('img-repeated-value').innerHTML = ""
}

  return (
    <>
    <h3>Type Category</h3>
    <form onSubmit={onFormSubmit}>

    <input 
    type="text"  
    placeholder="Find Gifs"
    value = {inputValue}
    onChange={onInputChange}
    onKeyDown={onKeyDown}
    />
    </form> 
    </>
  )
}
 