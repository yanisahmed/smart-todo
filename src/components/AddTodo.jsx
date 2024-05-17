import React from 'react'

export default function AddTodo() {
    return (
        <>
            <input type="text" placeholder="Add Todo" className="px-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
            <button className=" bg-[#add8e6] px-6 py-2 text-[#3b444b] font-bold" >Add</button>
        </>
    )
}
