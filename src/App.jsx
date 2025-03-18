import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0);

  const todoList = [
    {
        id: 1,
        task: "Купить продукты",
        completed: false,
        dueDate: "2023-10-15"
    },
    {
        id: 2,
        task: "Сделать домашнее задание",
        completed: true,
        dueDate: "2023-10-10"
    },
    {
        id: 3,
        task: "Позвонить другу",
        completed: false,
        dueDate: "2023-10-12"
    },
    {
        id: 4,
        task: "Записаться на курсы",
        completed: false,
        dueDate: "2023-10-20"
    },
    {
        id: 5,
        task: "Прочитать книгу",
        completed: false,
        dueDate: "2023-10-25"
    }
];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <Button name={`myBtn ${count}`}
        onClick={() => setCount((count) => count + 1)} />
      </div>

      <div className="list">
        {todoList.map((item, index) => {
          return (
            <li key={index}>{item.task}</li>
          )
        })}
      </div>
    </>
  )
}

export default App
