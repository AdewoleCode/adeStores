// "use client"

import React, { } from 'react'
import { collection, getDocs, where, getFirestore, query, doc } from 'firebase/firestore'
import { app } from "../../utils/FirebaseConfig.js"
import Image from 'next/image.js'
import ProductItem from '../productItem/ProductItem.jsx'
import "./PopularBikes.css"

const PopularBikes = async () => {
  const db = getFirestore(app)
  let data = []
  // const [bikes, setBikes] = useState([])

  const getPopularBikeList = async () => {

    const q = query(collection(db, "adeStoreProducts"),
      where("productStatus", "==", 'trending'
      ))

    return q
  }

  const q = await getPopularBikeList()

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    data.push(doc.data())
    // setBikes(bikes => ([...bikes, doc.data()]))

    console.log(doc.data());
  })

  return (
    <div className='popular-container'>
      <div className="popular-box">

        {
          data.length > 0 ? data?.map(bic => {
            return (
              <ProductItem
                key={bic.productID}
                name={bic.productName}
                images={bic.productImages}
                price={bic.productPrice} />
            )
          }) :
            <p className='' style={{ color: 'red' }}>LOADING...</p>
        }
      </div>

    </div>
  )
}

export default PopularBikes

