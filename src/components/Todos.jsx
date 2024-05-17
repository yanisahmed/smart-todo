import React from 'react'
import Todo from './Todo'

export default function ({ todos }) {
    return (
        <div className="task_list">
            {todos.map((todo, index) => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}
