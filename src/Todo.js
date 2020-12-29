import TodoItem from './TodoItem';

function Todo() {
    let todoItems = [
        { id: 1, done: true, description: 'Decide to learn React'},
        { id: 2, done: false, description: 'Learn React'},
        { id: 3, done: false, description: 'Learn React routing'},
        { id: 4, done: false, description: 'Implement in something real', detail: 'Consider using in System Explorer and/or Advent of puzzles'}
    ];

    return (
        <div>
            <p>Todo list:</p>
            <ul>
                {todoItems.map(x => {
                    return (<TodoItem key={x.id} item={x} />);
                })}
            </ul>
        </div>
    );
}

export default Todo;