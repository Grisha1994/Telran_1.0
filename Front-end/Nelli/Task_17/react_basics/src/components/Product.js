// 1. Создать компоненты Product (title, price) и ProductsContainer.
// 2. В ProductsContainer создать три продукта. передав значения через пропсы
// 3. Ипортировать ProductsContainer в App
// 4. Создать массив products в ProductsContainer (5 продуктов - id, title, price)
// 5. На основе созданного массива создать 5 продуктов
// 6. Вынести массив products в отдельный файл, импортировать его в ProductsContainer
// 7. Вывести только те товары, которые есть на складе и стоимость которых до 100$



import React from 'react'

export default function Product({title, price}) {
  return (
    <div>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}
