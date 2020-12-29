import React from 'react';

class TodoItem extends React.Component {
    render() {
        let style = {
            listStyleType: "none"
        };

        if (this.props.item.complete) {
            style.textDecoration = 'line-through';
        }

        return (
            <li style={style}>
                <input 
                    type="checkbox" 
                    checked={this.props.item.complete} 
                    onChange={() => this.props.onComplete(this.props.item.id)} />
                <span>{this.props.item.description}</span>
                {this.props.item.hasOwnProperty('detail') && this.props.item.detail != null && <p>{this.props.item.detail}</p>}
            </li>
        );
    }
}

export default TodoItem;