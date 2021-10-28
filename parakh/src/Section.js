import React from 'react'
import Card from './Card'

const Section = ({ state }) => {
    console.log(state)
    return (
        <React.Fragment>
            {state.data.map((item, i) => {
                return (<div key={i} className> <div>{item.name}</div>
                    <hr />
                    <Card item={item} />
                </div>)
            })}
        </React.Fragment>
    )
}

export default Section
