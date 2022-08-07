import { useState } from "react";
import Board from "./components/board/Board";
import "./index.css"

function App() {
  const todoItems = [
    { title: "Пройти курс по React", id: 1 },
    { title: "Отметить день рождения", id: 2 },
    { title: "Записаться на курсы английского языка, чтобы уехать жить в Лондон", id: 3 },
    { title: "Сделать бекенд своего сайта на node.js", id: 4 },

  ]
  const [boards, setBoards] = useState([
    { title: "План на месяц", todoItems, id: 1 },
    { title: "План на день", todoItems: [], id: 2 },
    null
  ], [])
  function addBoard(title, board, callbackFun) {
    if (title.trim()) {
      boards.pop()
      boards.push({ title, todoItems: [], id: Date.now() }, null)
      setBoards([...boards])
      callbackFun()
      console.log(...boards)
    }
  }
  function addCard(title, board, callbackFun) {
    setBoards(boards.map(el => {
      if (el && el.id === board.id && title.trim()) {
        el.todoItems.push({ title, id: Date.now() })
        return el
      } else {
        return el
      }
    }))
    callbackFun()
  }

  return (
    <div className="App">
      {boards.map((board, index) => {
        return <Board items={board} typeOfBoard={board ? ["карточк", addCard] : ["колонк", addBoard]} key={index} /> // ключ массива использовать в качестве аргумента для key не рекомендуется
      })}
    </div>
  );
}

export default App;
