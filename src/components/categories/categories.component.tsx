import { useEffect, useState } from 'react'
import axios from 'axios'

//Components
import CategoryItem from '../category-item/category-item.component'

//Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])

    const fetchCategories = async () => {
        try{
            const {data} = await axios.get(`${env.apiUrl}`)

            setCategories(data)
        }catch(err){
            console.log({err})
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])
    
    return (
        <CategoriesContainer>
            <CategoriesContent>
                
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category}/>
                    </div>
                ))}
                
            </CategoriesContent>
        </CategoriesContainer>
    )
}

export default Categories