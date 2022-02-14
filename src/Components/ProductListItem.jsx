import React from 'react'
import styled from 'styled-components';
const Div = styled.div`
 border: ${(props) => props.border};
 margin: ${(props) => props.margin};
 width: ${(props) => props.width};
`;
const ProductListItem = ({id, title, cost, image, category, handleDelete}) => {
    console.log(id, title, cost, image, category)
    return (
        <Div border="1px solid red" margin="7px auto" width="50%">
            <div>Title: {title}</div>
            <div>Cost: {cost}</div>
            <div>Category: {category}</div>
            <img src={image} style={{ width: "100px", border: "1px solid red" }} alt="todo" />
            <button onClick={() => handleDelete(id)} style={{display: "block", width: "100px", margin: "auto"}}>Delete</button>
        </Div>
    )
}

export default ProductListItem