import React from 'react'
import { useSelector } from 'react-redux';
import styles from './style.module.css'
import Category from '../Category/index.jsx';

export default function CategoriesContainer() {

    const category = useSelector(({category}) => category)

    return (
        <div className={styles.categories_container}>
            {
                category.map( category => <Category name={category} key={category}/> )
            }
        </div>
    )
}
