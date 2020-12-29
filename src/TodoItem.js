
function TodoItem(props) {
    let style = {
        listStyleType: "none"
    };

    if (props.item.done) {
        style.textDecoration = 'line-through';
    }

    return (
        <li style={style}>
            <input type="checkbox" defaultChecked={props.item.done}></input>
            <span>{props.item.description}</span>
            {props.item.hasOwnProperty('detail') && <p>{props.item.detail}</p>}
        </li>
    );
}

export default TodoItem;