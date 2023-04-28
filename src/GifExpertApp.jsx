import {useState} from 'react'; //importamos el hook usseState que viene dde react
import { AddCategory, GifGrid } from './Components';


//Functional Component
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);    

    const onAddCategory = (newValue)=>{

        if(categories.includes(newValue)) return;

        setCategories([newValue, ...categories]);
    }

  return (
    <>
        <h1>Gif Expert App</h1>
      
        <AddCategory 
            onNewCategory={(value)=>onAddCategory(value)}            
        >
        </AddCategory>
        
        {
            categories.map((category)=> (
                <GifGrid 
                    key={category} 
                    category={category}>                        
                </GifGrid>
            ))
        }
        
    </>
  )
}
