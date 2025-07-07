✅ **Context API** in React is a built-in way to **share state or data globally** across components **without passing props manually** at every level (prop drilling).

---

### 🔹 **When to Use Context:**

* Theme, Auth, Language, User Info
* Global config/settings
* Avoid passing props through many layers

---

### 🔹 **3 Main Steps to Use Context API:**

#### ✅ 1. **Create a Context**

```jsx
import { createContext } from 'react';

export const ThemeContext = createContext(); // default: undefined or any value
```

---

#### ✅ 2. **Provide the Context**

```jsx
import { ThemeContext } from './ThemeContext';

const App = () => {
  return (
    <ThemeContext.Provider value={"dark"}>
      <Dashboard />
    </ThemeContext.Provider>
  );
};
```

---

#### ✅ 3. **Consume the Context**

**Option A: useContext Hook**

```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
};
```

**Option B: `<ThemeContext.Consumer>` (older way)**

```jsx
<ThemeContext.Consumer>
  {value => <div>Theme: {value}</div>}
</ThemeContext.Consumer>
```

---

### 🔹 ✅ Example Summary

```jsx
// 1. Create
const AuthContext = createContext(null);

// 2. Provide
<AuthContext.Provider value={{ user: "Prem" }}>
  <MyComponent />
</AuthContext.Provider>

// 3. Use
const { user } = useContext(AuthContext);
```

---

### ✅ Summary Line for Interview:

> "Context API allows global state sharing across the component tree without prop drilling. It's ideal for app-wide settings like auth, theme, or language."
> 
