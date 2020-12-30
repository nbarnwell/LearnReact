import React from 'react';
import TodoItem from './TodoItem';

class Todo extends React.Component {
    constructor() {
        super();
        let todoItems = [
            { id: 1, complete: true, description: 'Decide to learn React'},
            { id: 2, complete: false, description: 'Learn React'},
            { id: 3, complete: false, description: 'Learn React routing'},
            { id: 4, complete: false, description: 'Implement in something real', detail: 'Consider using in System Explorer and/or Advent of puzzles'}
        ];

        this.state = { todos: todoItems };
        this.handleOnComplete = this.handleOnComplete.bind(this);
    }

    handleOnComplete(id) {
        this.setState(prevState => {
            let updatedItems = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.complete = !todo.complete;
                    todo.description += " (Complete)";
                }
                return todo;
            });
            return { todos: updatedItems };
        });
    }

    render() {
        return (
            <div>
                <p>Todo list:</p>
                <ul>
                    {this.state.todos.map(x => {
                        return (<TodoItem key={x.id} item={x} onComplete={this.handleOnComplete} />);
                    })}
                </ul>
            </div>
        );
    }
}

export default Todo;