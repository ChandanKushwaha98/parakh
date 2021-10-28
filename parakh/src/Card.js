import React from 'react'

const Card = ({ item }) => {
    return (
        <React.Fragment>
            {
                item.productList.map((item, j) => {
                    return (
                        <div className="card" key={j}>
                            <div className="container">
                                <h4 className="name">Name : {item.name}</h4>
                                <h4 className="price" >Price : {item.price}</h4>
                                <button type="button" className="btn-blue" onClick={(e) => this.addData(item.name)}>Add to the Card</button>
                                <button type="button" className="btn-blue" onClick={(e) => this.removeData(item.name)}>Remove from Card</button>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Card
