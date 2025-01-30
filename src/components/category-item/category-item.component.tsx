import {FunctionComponent} from 'react'

import './category-item.styles.css'

import Category from "../../types/category.types"

interface CategoryItemProps {
    category: Category
}

const categoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return (
        <div className="category-item-container" style={{backgroundImage: `url('${category.imageUrl}')`}}>
            <div className="category-name">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
    )
}

export default categoryItem