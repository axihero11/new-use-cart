import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

function Home() {
    return (
        <div>
            <h1>Hamma productlar</h1>
            <div className="card_container">
                <div className="card_item">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
