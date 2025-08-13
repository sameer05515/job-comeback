Here are **commonly used design patterns** when creating ReactJS components:


- 1. **Presentational & Container Components (Smart/Dumb)**
- 2. **Higher-Order Components (HOC)**
- 3. **Render Props**
- 4. **Custom Hooks**
- 5. **Compound Components**
- 6. **Controlled vs Uncontrolled Components**
- 7. **Provider Pattern (Context API)**

---

### 🔹 1. **Presentational & Container Components (Smart/Dumb)**

* **Presentational**: UI only, receives props.
* **Container**: Handles logic/state, passes props down.

```jsx
// Presentational
const UserList = ({ users }) => (
  <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
);

// Container
const UserContainer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => { fetchUsers().then(setUsers); }, []);
  return <UserList users={users} />;
};
```

---

### 🔹 2. **Higher-Order Components (HOC)**

* A function that takes a component and returns a new component.

```jsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props: ", props);
    return <WrappedComponent {...props} />;
  };
};
```

---

### 🔹 3. **Render Props**

* Share logic by passing a render function as a prop.

```jsx
const MouseTracker = ({ render }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
    {render(pos)}
  </div>;
};

// Usage
<MouseTracker render={({ x, y }) => <h1>Mouse at {x},{y}</h1>} />
```

---

### 🔹 4. **Custom Hooks**

* Reusable logic extracted into hooks.

```jsx
const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
};
```

---

### 🔹 5. **Compound Components**

* Related components that work together with shared internal state.

```jsx
const Tabs = ({ children }) => { /* parent */ }
Tabs.Tab = ({ children }) => { /* tab */ }
Tabs.Panel = ({ children }) => { /* panel */ }
```

---

### 🔹 6. **Controlled vs Uncontrolled Components**

* Controlled: `value` and `onChange` handled by React.
* Uncontrolled: Use `ref` to access DOM.

---

### 🔹 7. **Provider Pattern (Context API)**

* Share global state via React Context.

```jsx
const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  return <ThemeContext.Provider value={{ dark, setDark }}>
    {children}
  </ThemeContext.Provider>;
};
```

---

Let me know if you want code examples or a project structure using these.
