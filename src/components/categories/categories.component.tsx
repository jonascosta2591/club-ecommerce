import { useEffect, useState } from 'react'
import axios from 'axios'

//Components
import CategoryItem from '../category-item/category-item.component'

//styles
import './categories.styles.css'

//Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

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
        <div className="categories-container">
            <div className="categories-content">
                
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Categories