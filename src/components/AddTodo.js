import React, { useState } from 'react';

    

function AddTodo(props) {

    
    const [todo, setTodo] = useState(
        {title: ""}
    )

    let onChange = (e) => {
        setTodo({ [e.target.name]: e.target.value
        });
        console.log(todo);
    }

    let onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todo.title);
        setTodo({ title: ''
        });
    }

    return (
        <form onSubmit={onSubmit} style={{ display:'flex' }}> 
            <input 
                type="text" 
                name="title" 
                style={{ flex: '10', padding:'5px' }}
                placeholder="add Todo ..." 
                value={todo.title}
                onChange={onChange}
            />
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: '1'}}
            />
        </form>
    )
}

export default AddTodo;