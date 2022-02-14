import React, { useEffect, useState } from 'react'
import ProductInput from './ProductInput'
import ProductListItem from './ProductListItem'
import {Pagination, Api} from './Pagination'
const Todo = () => {
    const [formData, setFormData] = useState({})
    const [page, setPage] = useState(1)
    const [dlt, setDelete] = useState(false)
    const [data, setData] = useState([])
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]:value
        })
    }
    const handleAdd = (e) => {
        console.log("akash")
        let payload = {
            title: formData.title,
            cost: formData.cost,
            image: formData.image,
            category: formData.category
        }
    
        
            Api(payload, page).then(response => response.json())
            .catch(error => console.error("Error", error))
            .then((response) => {
                if (data.length < 5) {
                    setData([...data, response])

                }
                console.log("response", data.length)
                setFormData({
                    ...formData, title: "", cost: NaN, category: "", image: ""
                })
            });
        // console.log(data)
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },

        })
            .then((res) => res.json())
            .then((res) => {
                console.log("res", res.length)
                setData([...data, res])
                setDelete(!dlt)
            })
    }
    useEffect(() => {
        fetch(`http://localhost:8000/todos?_page=${page}&_limit=2`)
            .then((res) => res.json())
            .then((res) => {
                console.log("res", res.length)
                setData(res)
            })
    }, [page, dlt])
    return (
        <>
           <ProductInput formData={formData} handleChange = {handleChange} handleAdd={handleAdd} />
           
                {data.map((todo) => {
                    console.log("todo", todo)
                    return (
                        <>
                          <ProductListItem key={todo.id} {...todo} handleDelete={handleDelete}/>
                        </>
                    )
                })}
                
                <Pagination page={page} setPage={setPage} />
            
        </>
    )
}

export default Todo