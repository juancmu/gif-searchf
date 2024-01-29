
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

const areasCFRO = ['Environmental']

const [categories, setCategories] = useState([ 'Environmental','Social'])

const onAddCategory = (newCategory) => {

  console.log(newCategory);
  // validate unique value
  if(categories.includes(newCategory)) {
    

    console.log(`Valor Repetido`);
    document.getElementById('repeated-value').innerHTML = "Dont Repeat Category"
    return
  }

  console.log(newCategory);

  setCategories([...categories, newCategory])
  // setCategories( cat => [...cat,'tram'])




}


console.log(categories);

  return (
    <>
    {/* titulo */} 
    <h1>GifExpertApp</h1>
    <h1 id='repeated-value'></h1>
    {/* <img id='img-repeated-value' src='../src/assets/images.png'></img> */}
    
    {/* input */}
      <AddCategory 

        // setCategories = {setCategories}
        // onNewCategory = { (value) => onAddCategory(value) }
        onNewCategory = {onAddCategory}
      />


    {/* Gifs List */}

  
      
        {categories.map(  category => {

            return (
              <GifGrid key={category} category={category}/>
            )

        })}
        
        
      

      {/* Gif Item */}

    </>
  )
}
