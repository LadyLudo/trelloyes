import React from 'react'
import './Card.css';

class Card extends React.Component {
    deleteCard = () => {
        this.props.onDelete(this.props.listId, this.props.cardId)
    }

    render() {
        return (
            <div className="Card">
                <button type="button" onClick={this.deleteCard}>delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}


export default Card