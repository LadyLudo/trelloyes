import React from 'react'
import Card from './Card'
import './List.css'


class List extends React.Component {
    static defaultProps= { cards: [] }

    onAddRandom = () => {

    }


    render(){

        return (
            <section className = "List" >
                <header className = "List-header" >
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {this.props.cards.map(card =>
                        <Card
                            key={card.id}
                            cardId={card.id}
                            title={card.title}
                            content={card.content}
                            listId={this.props.listId}
                            onDelete={this.props.onDelete}
                        />
                    )}
                    <button type="button" className="List-add-button" onClick={this.props.onAddRandom}>
                    + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}

export default List