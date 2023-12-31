import { useState } from 'react'
import "./main"


function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])
  function addTodo(event) {
    event.preventDefault();
    if (text === "") {
      alert("Please enter todo");
      return;
    }
    setTodo([...todo, text]);
    setText("")

  }
  function delBtn(i) {
    console.log("delete successfully", i);
    const newArr = [...todo];
    newArr.splice(i, 1);
    setTodo(newArr);
  }
  function editBtn(i) {
    console.log("Update successfully", i);
    const newArr = [...todo];
    let newVal = prompt("Enter new value");
    if (newVal === "") {
      alert("Please enter a value");
      return;
    } else if (newVal === null) {
      return;
    }
    newArr[i] = newVal;
    setTodo(newArr);
  }

  return (
    <>
      <div className='container'>
        <h1>Todo App</h1>
        <form onSubmit={addTodo}>
          <input type="text" placeholder='enter text' onChange={(e) => setText(e.target.value)} value={text} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
      <div className='todo-div'>
        <ul className='todo-list'>
          {todo.map((item, index) => {
            return <li key={index} className='li'>
              <div className='item-div'>{item}</div>
              <div>
                <button className='delBtn' onClick={() => delBtn(index)}><i class='bx bx-trash'></i></button>
                <button className='editBtn' onClick={() => editBtn(index)}><i class='bx bxs-edit'></i></button>
              </div>

            </li>

          })}
        </ul>
      </div>

    </>
  )
}

export default App








