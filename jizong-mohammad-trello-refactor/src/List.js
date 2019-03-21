import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  console.log("inside list component", props)
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card,index) =>
          <Card
            key={index}
            listId = {props.listId}
            cardId={index}
            title={card.title}
            content={card.content}
            deleteHandle = {props.delete}
          />
        )}
        <button onClick ={()=>props.add(props.listId)}
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}