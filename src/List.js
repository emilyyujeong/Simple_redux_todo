import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { remove, update } from "./store/store";

const LI = styled.li`
&.on {
    color: tomato;
    text-decoration: line-through;
}
`

const List = () => {
    const { todoList } = useSelector(store => store);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>List</h2>
            {console.log(todoList)}
            <ul>
                {
                    todoList.map(it => {
                        return (
                            <LI key={it.id} className={it.done ? 'on' : ''}>{it.content} &nbsp;&nbsp;&nbsp;
                                <button onClick={() => dispatch(update(it))}>{it.done ? 'GOOD' : 'DOIT'}</button>
                                <button onClick={() => dispatch(remove(it))}>DELETE</button>
                            </LI>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;