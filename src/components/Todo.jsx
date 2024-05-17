import React from 'react'

export default function Todo() {
    return (
        <li className="flex justify-center mt-2">
            <input type="checkbox" />
            <p className=" leading-loose px-2 text-white w-40">Hellor From React</p>
            <button className="bg-[#fb654e] text-white font-bold py-1 px-4 rounded hover:bg-purple-700">
                Edit
            </button>
            <button type="button" className=" bg-red-500 px-4 py-1 ms-1 text-white rounded font-bold hover:bg-red-700">Delete</button>
        </li>
    )
}
