import React from 'react'
function Products(props){
    return(
        <React.Fragment>

            <h2>{props.product.name}</h2>
            <p>{props.product.price}</p>
            </React.Fragment>

    )
}
export default Products