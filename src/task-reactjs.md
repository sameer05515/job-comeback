Here are **3 real-world ReactJS coding tasks** often asked in interviews (suitable for 2–7+ YOE):

---

### ✅ **Task 1: Todo App with LocalStorage**

**Requirements:**

* Input box + Add button
* Show list of todos
* Support delete
* Persist todos in localStorage

```jsx
function TodoApp() {
  const [input, setInput] = React.useState('');
  const [todos, setTodos] = React.useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) setTodos([...todos, input.trim()]);
    setInput('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTodo(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### ✅ **Task 2: Search Filter with useEffect**

**Requirements:**

* Show a list of items
* Add input box to filter items based on search
* Use `useEffect` for search debounce (500ms)

```jsx
function SearchList() {
  const [items] = React.useState(['Apple', 'Banana', 'Grapes', 'Mango']);
  const [query, setQuery] = React.useState('');
  const [filtered, setFiltered] = React.useState(items);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setFiltered(items.filter(i => i.toLowerCase().includes(query.toLowerCase())));
    }, 500);
    return () => clearTimeout(id);
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {filtered.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
```

---

### ✅ **Task 3: Counter with Cleanup in useEffect**

**Requirements:**

* Counter increases every second
* Pause/resume functionality
* Clean up interval on unmount

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  const [running, setRunning] = React.useState(true);

  React.useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setRunning(!running)}>
        {running ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}
```

---

Reply with:

* `more` → for pagination, fetch, forms, edit in place
* `redux-task` → for Redux-specific tasks
* `vite-task` or `next-task` → for modern React ecosystem tasks
* `test` → if you want Jest/unit testing tasks
* 
