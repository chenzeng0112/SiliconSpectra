import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import "./index.css"

// function App() {
//     const todoItem = todosData.map(item => <TodoItem key={item.id} item={item} />)

//         return (
//             <div className="todo-list">
//                 {todoItem}
//             </div>
//         )
// }

class App extends React.Component {


    render() {
        const todoItem = todosData.map(item => <TodoItem key={item.id} item={item} />)

        return (
            <div className="todo-list">
                {todoItem}
            </div>
        )
    }
}

export default App