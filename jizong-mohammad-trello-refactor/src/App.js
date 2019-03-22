import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  state ={
    
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { title: 'First card', content: 'lorem ipsum' },
        'b': { title: 'Second card', content: 'lorem ipsum' },
        'c': { title: 'Third card', content: 'lorem ipsum' },
        'd': { title: 'Fourth card', content: 'lorem ipsum' },
        'e': { title: 'Fifth card', content: 'lorem ipsum' },
        'f': { title: 'Sixth card', content: 'lorem ipsum' },
        'g': { title: 'Seventh card', content: 'lorem ipsum' },
        'h': { title: 'Eighth card', content: 'lorem ipsum' },
        'i': { title: 'Ninth card', content: 'lorem ipsum' },
        'j': { title: 'Tenth card', content: 'lorem ipsum' },
        'k': { title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { title: 'Twelth card', content: 'lorem ipsum' },
        'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
      }
    
    
  }
    
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };
  deleteCardHandle=(listId,cardId)=>{
      //console.log('`deleteCardHandle` ran','/nlist id:',listId,'card id/n',cardId)
      //console.log(this.state.lists[listId-1])
      const newLists = this.state.lists
      console.log('card ids in the selected list',this.state.lists[listId-1].cardIds)
      const deleteItem = this.state.lists[listId-1].cardIds[cardId]
      console.log('delete item',deleteItem)
      const newCardsIdArr = this.state.lists[listId-1].cardIds.filter(id=>id!==deleteItem)
      console.log('new card ids array',newCardsIdArr)
      newLists[listId-1].cardIds = newCardsIdArr
      console.log('new list',newLists)
      this.setState({
        lists:newLists
      }
       
     )
      //console.log(deleteItem)
      // const newCardId = this.state.lists[listId]
      // console.log(newCardId)
     
  }

  
   newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }


  addRandomCardHandle=(listId)=>{
    //console.log('`addRandomCardHandle` ran')
    const randomItem = this.newRandomCard()
    console.log(randomItem,randomItem.id)

    const newLists = this.state.lists
    
    newLists[listId-1].cardIds.push(randomItem.id)
    
    const newAllCards = this.state.allCards
    newAllCards[randomItem.id]=randomItem
    this.setState(
      {
        lists:newLists,
        allCards:newAllCards
      }
    )
    
    
    

    //console.log(randomIndex)
    

  }

  render() {
    //const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => 
            <List
              listId = {list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              delete = {this.deleteCardHandle}
              add = {this.addRandomCardHandle}
              listProp = {list}
            />
          )}
        </div>
      </main>
    );
  }
}

export default App;