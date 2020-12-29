import React from 'react';

class TodoItem extends React.Component {
    render() {
        let style = {
            listStyleType: "none"
        };

        if (this.props.item.done) {
            style.textDecoration = 'line-through';
        }

        return (
            <li style={style}>
                <input type="checkbox" defaultChecked={this.props.item.done} onChange={() => this.props.onComplete(this.props.item.id)}></input>
                <span>{this.props.item.description}</span>
                {this.props.item.hasOwnProperty('detail') && <p>{this.props.item.detail}</p>}
            </li>
        );
    }
}

export default TodoItem;