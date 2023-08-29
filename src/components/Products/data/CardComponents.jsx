import React from 'react'
import ProductCard from '../ProductCard'
import ColumnProductCard from '../ColumnProductCard'

const CardComponents = (products, category, view) => {
  return (
    products.map((data) => {
        return view === "grid" ? 
        <ProductCard 
            key={data.id}
            id={data.id}
            img={data.productImage} 
            brand={data.brandName} 
            name={data.productName}
            price={data.price}
            description={data.productDescription}
            category={category}
        />
        :
        <ColumnProductCard 
            key={data.id}
            id={data.id}
            img={data.productImage} 
            brand={data.brandName} 
            name={data.productName}
            price={data.price}
            description={data.productDescription}
            category={category}
        />
    })

  )
}

export default CardComponents