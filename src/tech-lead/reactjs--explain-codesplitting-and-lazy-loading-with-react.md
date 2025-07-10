# 2. **Explain code-splitting and lazy loading with React.**

✅ Here's a concise and practical explanation of **code-splitting and lazy loading in React**, with code examples:

---

## 🧩 What is Code Splitting?

**Code splitting** means breaking your large JS bundle into smaller chunks, so users load only what they need.

> 🔥 Improves initial load time
> 🚀 Enhances performance for large apps

---

## 💤 What is Lazy Loading?

**Lazy loading** is the act of loading components *only when needed* — like a page or tab user visits.

---

## ✅ How to Implement in React (using `React.lazy`)

### 📦 1. **Basic Example**

```js
// Lazy load the component
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}
```

* `React.lazy` splits the code
* `Suspense` shows fallback UI while chunk is loading

---

### 🧭 2. **Lazy Load Routes**

```js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

<BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Suspense>
</BrowserRouter>
```

---

## 🧪 3. **Chunk Split Output (via Webpack)**

React + Webpack automatically creates:

```
main.js
about.chunk.js
dashboard.chunk.js
```

Only `main.js` is loaded initially. Others are lazy-loaded.

---

## 🎯 When to Use

* Route-based components
* Heavy/rarely-used features (e.g., analytics panel, admin tools)
* Charts, editors, video components, etc.

---

Let me know if you'd like:
✅ A React + Vite/Webpack project with lazy loading
✅ Real-world dashboard code-splitting strategy
