import React from 'react';
import './App.css';
import List from './List'
import STORE from "./store";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            store: STORE
        }
    }
    static defaultProps = {
        store: {
            lists: [],
            allCards: {},
        }
    };

    handleDelete = (list, cardId) => {
        console.log('delete card please!')
        //find the card id on the list, remove it from the list, return new list
        // return Object.entries(list).reduce(
        //     (newList, [id, value]) =>
        //         id === cardId ? newList : {...newList, [id]: value},
        //     {}
        // );
        const newList = list.filter(id => id !== cardId)
        // this.setState({
        //     store: store.lists.
        // })
    }

    handleAddRandomCard = () => {
        console.log('add new card please!')
    }


    render() {
          return (
              <main className="App">
                  <header className="App-header">
                      <h1>Trelloyes!</h1>
                  </header>
                  <div className="App-list">
                      {this.state.store.lists.map(list =>
                          <List
                              key={list.id}
                              listId={list.cardIds}
                              header={list.header}
                              cards={list.cardIds.map(id=> this.state.store.allCards[id])}
                              onDelete={this.handleDelete}
                              onAddRandom={this.handleAddRandomCard}
                          />
                      )}
                  </div>
              </main>
      );
    }
}

export default App;
