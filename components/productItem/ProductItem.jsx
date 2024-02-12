import Image from 'next/image'
import React from 'react'
import "./productItem.css"

const ProductItem = ({ name, desc, price, images, category, status, id }) => {
    return (
        <div className='item-container'>
            <div className="img-box">
                <Image width={200} height={130} src={images[0]} />
            </div>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )
}

export default ProductItem