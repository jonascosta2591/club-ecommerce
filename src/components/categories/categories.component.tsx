import { useEffect, useState } from 'react'
import axios from 'axios'

//styles
import './categories.styles.css'

//Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

const categories = () => {
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
                
            </div>
        </div>
    )
}

export default categories