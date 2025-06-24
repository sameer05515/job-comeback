# Difference between props and state?

### ✅ **Difference Between Props and State in React**

| Feature                | `Props`                            | `State`                                                 |
| ---------------------- | ---------------------------------- | ------------------------------------------------------- |
| **Definition**         | Read-only data passed to component | Mutable data local to component                         |
| **Mutability**         | **Immutable**                      | **Mutable**                                             |
| **Setter**             | Set by parent only                 | Updated via `useState` or `this.setState()`             |
| **Usage**              | Used to configure child components | Used for dynamic behavior (e.g., form inputs, counters) |
| **Access**             | `props.name`                       | `[count, setCount] = useState(0)`                       |
| **Location**           | Passed from **parent to child**    | Lives **inside the component**                          |
| **Renders on Change?** | Yes                                | Yes                                                     |

---

### ✅ Example: `Props` vs `State`

```jsx
function Greeting({ name }) { // ← props
  const [counter, setCounter] = React.useState(0); // ← state

  return (
    <>
      <h1>Hello, {name}</h1>           {/* prop used */}
      <p>Clicked {counter} times</p>   {/* state used */}
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </>
  );
}
```

---

### 🧠 Tip for Interviews

* Props = config
* State = data that changes over time

---

Reply with:

* `deep` → to get lifecycle relation with props/state
* `qna` → for React interview Q\&A pack
* `code` → for stateful form vs stateless component example

---
---
# qna
