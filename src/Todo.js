import React from 'react';
import TodoItem from './TodoItem';

class Todo extends React.Component {
    constructor() {
        super();
        let todoItems = [
            { id: 1, done: true, description: 'Decide to learn React'},
            { id: 2, done: false, description: 'Learn React'},
            { id: 3, done: false, description: 'Learn React routing'},
            { id: 4, done: false, description: 'Implement in something real', detail: 'Consider using in System Explorer and/or Advent of puzzles'}
        ];

        this.state = { items: todoItems };
        this.handleOnComplete = this.handleOnComplete.bind(this);
    }

    handleOnComplete(id) {
        this.setState(prev => {
            return {
                items: prev.items.map(x => {
                    let done = x.id === id ? !x.done : x.done;
                    let result = { id: x.id, done: done, description: x.description };
                    if (x.hasOwnProperty('detail')) {
                        result.detail = x.detail;
                    }
                    return result;
                })
            }
        });
    }

    render() {
        return (
            <div>
                <p>Todo list:</p>
                <ul>
                    {this.state.items.map(x => {
                        return (<TodoItem key={x.id} item={x} onComplete={this.handleOnComplete} />);
                    })}
                </ul>
            </div>
        );
    }
}

export default Todo;