import { Card } from "../../components/Card";
import className from "./HomePage.module.css";

export const HomePage = () => {
  const cards = [
    {
      id: "1",
      question: "Что такое React?",
      answer:
        "React — это библиотека для создания пользовательских интерфейсов.",
      description:
        "React — это JavaScript-библиотека, разработанная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.",
      resources: ["https://react.dev", "https://react.dev/reference/react"],
      level: 1,
      completed: true,
      editDate: "03.02.2025, 19:49",
    },
    {
      id: "2",
      question: "Что такое JSX?",
      answer: "JSX — это синтаксическое расширение JavaScript для React.",
      description:
        "JSX позволяет писать HTML-подобный код в JavaScript, который затем транспилируется в вызовы `React.createElement`. Он облегчает создание и визуальное представление структуры компонентов.",
      resources: ["https://react.dev/learn/writing-markup-with-jsx"],
      level: 2,
      completed: false,
      editDate: "03.02.2025, 20:25",
    },
    {
      id: "3",
      question: "Какой основной принцип работы React?",
      answer: "React использует Virtual DOM для оптимизации рендеринга.",
      description:
        "React поддерживает концепцию Virtual DOM — это представление реального DOM в памяти. Когда состояние компонента изменяется, React сравнивает Virtual DOM с предыдущим состоянием и обновляет только измененные элементы на странице.",
      resources: ["https://react.dev/learn/render-and-commit"],
      level: 2,
      completed: false,
      editDate: "03.02.2025, 19:01",
    },
    {
      id: "4",
      question: "Как создать компонент в React?🍩",
      answer: "Компонент можно создать как функцию или класс.",
      description:
        "Функциональные компоненты — это функции, принимающие `props` и возвращающие JSX. Классовые компоненты — это классы, наследуемые от `React.Component`, с методом `render`.",
      resources: ["https://react.dev/learn/your-first-component"],
      level: 1,
      completed: false,
      editDate: "21.02.2025, 20:26",
    },
    {
      id: "5",
      question: "Что такое props в React?",
      answer: "Props — это входные параметры компонентов.",
      description:
        "Props (свойства) используются для передачи данных от родительского компонента к дочернему. Они неизменяемы внутри компонента и позволяют делать компоненты более гибкими и переиспользуемыми.",
      resources: ["https://react.dev/learn/passing-props-to-a-component"],
      level: 1,
      completed: false,
    },
    {
      id: "6",
      question: "Что такое состояние (state) в React?",
      answer:
        "State — это внутренние данные компонента, которые могут изменяться.",
      description:
        "Состояние управляется внутри компонента и изменяется через `setState` в классовых компонентах или `useState` в функциональных. Изменение состояния инициирует повторный рендер компонента.",
      resources: ["https://react.dev/learn/state-a-components-memory"],
      level: 2,
      completed: true,
    },
    {
      id: "7",
      question: "Как работает useState в React?",
      answer:
        "useState — это хук для управления состоянием в функциональных компонентах.",
      description:
        "`useState` возвращает массив из двух элементов: текущего значения состояния и функции для его обновления. Используется для хранения и изменения данных в компонентах.",
      resources: ["https://react.dev/reference/react/useState"],
      level: 2,
      completed: true,
    },
    {
      id: "8",
      question: "Что такое useEffect?",
      answer: "useEffect — это хук для управления побочными эффектами.",
      description:
        "Хук `useEffect` позволяет выполнять побочные эффекты, такие как запросы к API, подписки и манипуляции с DOM. Он вызывается после рендеринга и может зависеть от определенных значений.",
      resources: ["https://react.dev/reference/react/useEffect"],
      level: 2,
      completed: true,
    },
  ];

  return (
    <div className={className.main}>
      HomePage
      {cards.map((card, index) => {
        return (
            <Card card={card} key={card.id} />
        )
      })}
    </div>
  );
};
