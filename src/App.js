import Board from "./components/board/Board";
import "./index.css"

function App() {
  const todoItems = [
    {title: "Пройти курс по React", id: 1},
    {title: "Отметить день рождения", id: 2},
    {title: "Записаться на курсы английского языка, чтобы уехать жить в Лондон", id: 3},
    {title: "Сделать бекенд своего сайта на node.js", id: 4},

  ]
  return (
    <div className="App">
      <Board items={todoItems}/>
    </div>
  );
}

export default App;
