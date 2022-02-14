import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
 color: ${(props) => props.color};
margin: ${(props) => props.margin};
padding: ${(props) => props.padding}
`;

const Div = styled.div`
 margin: ${(props) => props.margin};
`;
const Api = (payload, page) => {
    return fetch(`http://localhost:8000/todos?_page=${page}&_limit=2`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
    })
}
const Pagination = ({page, setPage}) => {
    return (
        <Div margin="1rem" >
            <Btn color="red" margin="4px" padding="3px" onClick={() => setPage(page - 1)}>Previous</Btn>
            <Btn color="red" margin="4px" padding="3px 10px" onClick={() => setPage(page + 1)}>Next</Btn>
        </Div>
    )
}

export  {Pagination}
export  {Api}