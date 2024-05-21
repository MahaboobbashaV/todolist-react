import React from 'react'
import { FaTrash } from "react-icons/fa";

const ListItems = ({items, handleCheck, handleDelete}) => {
  return (
    <>
    <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <input
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                    />
                    <label
                    onDoubleClick={() => handleCheck(item.id)}
                    style={(item.checked) ? {textDecoration: 'line-through'} : null}
                    >{item.item}</label>
                    <FaTrash 
                    role='button'
                    onClick={() => handleDelete(item.id)}
                    tabIndex='0'
                    />
                </li>
            ))}
           </ul>
    </>
  )
}

export default ListItems