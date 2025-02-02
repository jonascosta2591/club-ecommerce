import {FunctionComponent} from 'react'

import Category from "../../types/category.types"
import { CategoryItemContainer, CategoryName } from './category-items.styles'

interface CategoryItemProps {
    category: Category
}

const categoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return (
        <CategoryItemContainer backgroundImage={category.imageUrl}>
            <CategoryName>
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    )
}

export default categoryItem