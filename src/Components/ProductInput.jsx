import React from 'react'
import styled from 'styled-components';
const Form = styled.form`
    border: ${(props) => props.border};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    display: ${(props) => props.display};
    gap: ${(props) => props.gap};
    flex-direction: ${(props) => props.flexDirection};
`;

const Btn = styled.button`
 color: ${(props) => props.color};
margin: ${(props) => props.margin};
width: ${(props) => props.width}
`;
const ProductInput = ({formData, handleChange, handleAdd}) => {
    console.log(formData)
    return (
        <Form border="1px solid orange" padding="10px" width="60%" margin="2rem auto" display="flex" gap="10px" flexDirection="column">
            <div>
                <label>Title</label>
                <input value={formData.title} name="title" onChange={handleChange} />
            </div>
            <div>
                <label>Cost</label>
                <input value={formData.cost} name="cost" type="number" onChange={handleChange} />
            </div>
            <div>
                <label>Image</label>
                <input value={formData.image} name="image" type="url" onChange={handleChange} />
            </div>
            <div>
                <label>Category</label>
                <input value={formData.category} name="category" type="text" onChange={handleChange} />
            </div>
            <Btn color="olive" margin="8px auto" width="60%" onClick={handleAdd}>Add Todo</Btn>
        </Form>
    )
}

export default ProductInput