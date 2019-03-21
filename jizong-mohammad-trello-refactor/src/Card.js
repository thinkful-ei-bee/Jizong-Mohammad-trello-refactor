import React from 'react';
import './Card.css';

export default function Card(props) {
  //console.log("from inside card component", props)
  return (
    <div className='Card'>
      <button
        //id= {props.id}
        type='button'
        onClick={() => props.onDeleteHandle(props.listId, props.cardId)}
  //console.log('test key',props)
  return (
    <div className='Card'>
      <button
        type='button' onClick={()=>props.deleteHandle(props.listId,props.cardId)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}