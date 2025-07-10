# 1. **How do you manage performance in large React apps?**

✅ Here's a checklist-style answer to **"How do you manage performance in large React apps?"** — interview-ready and practical:

---

## ⚙️ 1. **Component Optimization**

* ✅ Use `React.memo` for functional components
* ✅ Use `shouldComponentUpdate` for class components
* ✅ Break large components into smaller, focused ones
* ✅ Avoid anonymous functions in render (use `useCallback`)

---

## 🧠 2. **Hooks Optimization**

* ✅ Use `useMemo` for expensive calculations
* ✅ Use `useCallback` for stable function references
* ✅ Avoid unnecessary state/prop changes

---

## 📦 3. **Code Splitting**

* ✅ Use **React.lazy + Suspense** for dynamic imports
* ✅ Split routes using `react-router`'s lazy loading
* ✅ Chunk common vendor files using Webpack

---

## 🌐 4. **Network Performance**

* ✅ Debounce API calls (e.g., search input)
* ✅ Use `useEffect` smartly (prevent over-fetching)
* ✅ Cache GET requests with SWR, React Query, etc.
* ✅ Compress and paginate large payloads

---

## 🎨 5. **Rendering Performance**

* ✅ Virtualize large lists using `react-window` or `react-virtualized`
* ✅ Avoid unnecessary DOM updates
* ✅ Use key props wisely in lists

---

## 📊 6. **Profiling & Monitoring**

* ✅ Use **React DevTools Profiler**
* ✅ Use browser performance tab (FPS, paint time)
* ✅ Track long tasks, unused re-renders, memory leaks

---

## 🧩 7. **Other Practices**

* ✅ Lazy load images with `<img loading="lazy" />` or libs
* ✅ Minimize context re-renders (use selectors or split contexts)
* ✅ Avoid deep prop drilling (use Zustand, Jotai, Recoil if needed)

---

## 🧪 Bonus Tools

| Tool             | Purpose                  |
| ---------------- | ------------------------ |
| React Profiler   | Detect slow components   |
| Bundle Analyzer  | Inspect JS size          |
| Lighthouse       | Performance + UX metrics |
| Webpack analyzer | Identify bloated bundles |

---

Would you like code examples for any of these strategies (like `React.memo`, `react-window`, etc.)?
