✅ Here's a crisp, real-world answer to:
**"How do you avoid prop drilling in deep component trees?"**

---

## 🎯 What is Prop Drilling?

> Passing props through many intermediate components just to reach a deeply nested child.

---

## 🚫 Why Avoid It?

* Clutters intermediate components
* Makes components tightly coupled
* Harder to refactor, maintain, and test

---

## ✅ Solutions to Avoid Prop Drilling

---

### 1. **React Context API**

Best for **global or shared state** (theme, auth, user, settings).

```jsx
// context/UserContext.js
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

// usage
const { user } = useContext(UserContext);
```

---

### 2. **Custom Hooks with Context**

Encapsulate shared logic cleanly.

```js
// useUser.js
export const useUser = () => useContext(UserContext);
```

---

### 3. **State Management Libraries**

* 🔹 **Zustand**: Minimal, React-friendly, no boilerplate
* 🔹 **Redux Toolkit**: Great for large apps and async flows
* 🔹 **Jotai**, **Recoil**: Modern state managers

Example (Zustand):

```js
const useStore = create((set) => ({
  user: null,
  setUser: (u) => set({ user: u })
}));
```

---

### 4. **Component Composition**

Pass children as functions or elements to reduce prop chain.

```jsx
<Sidebar user={user}>
  <Menu />
</Sidebar>
```

---

### 5. **Memoization + Lifting State Strategically**

* Keep shared state as close as needed—not higher than required
* Use `useMemo`, `React.memo` to prevent unnecessary re-renders

---

## 💡 TL;DR

| Solution      | Use When                            |
| ------------- | ----------------------------------- |
| Context API   | Global/static shared values         |
| Custom Hooks  | Logic reuse with context            |
| Zustand/Redux | Complex or multi-feature state      |
| Composition   | Isolated but state-aware components |

---

Want example of prop drilling → context refactor? Just say the word!
