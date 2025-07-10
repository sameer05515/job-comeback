✅ Here's a crisp and practical answer to:
**"How do you ensure accessibility (a11y) in your React apps?"**

---

## ♿️ **Key Accessibility Practices in React**

### ✅ 1. **Semantic HTML First**

* Use native elements (`<button>`, `<label>`, `<input>`, `<nav>`, etc.)
* Avoid div/button spam — semantics matter for screen readers

---

### ✅ 2. **ARIA Roles (when needed)**

* Add ARIA only when native elements can’t express intent

```jsx
<div role="alert" aria-live="polite">Form submitted!</div>
```

---

### ✅ 3. **Keyboard Navigation**

* Ensure all interactive elements are `focusable` using `tabIndex`
* Use `onKeyDown` for custom components to support arrow/enter keys

---

### ✅ 4. **Labels & Form Inputs**

* Always link labels with inputs using `htmlFor` or wrap them

```jsx
<label htmlFor="email">Email</label>
<input id="email" type="text" />
```

---

### ✅ 5. **Focus Management**

* Use `autoFocus` wisely
* Trap focus in modals using libraries like `focus-trap-react`
* Return focus to previous element after closing modals

---

### ✅ 6. **Color & Contrast**

* Ensure sufficient color contrast (AA/AAA compliant)
* Never rely on color alone to convey meaning (add icons or labels)

---

### ✅ 7. **Accessible Alerts & Live Regions**

* Use `aria-live`, `role="status"` for dynamic content (toasts, errors)

---

### ✅ 8. **Use Accessibility Libraries & Tools**

* `eslint-plugin-jsx-a11y` – Linting rules
* `axe-core` / `axe DevTools` – Runtime accessibility checks
* `react-aria`, `reach-ui`, `radix-ui` – Prebuilt accessible components

---

### ✅ 9. **Testing for a11y**

* Write a11y unit/integration tests with:

  * [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)
  * [jest-axe](https://github.com/nickcolley/jest-axe)

```js
expect(await axe(container)).toHaveNoViolations();
```

---

## 🧪 Bonus

For large apps, build a custom `AccessibleButton`, `AccessibleModal`, etc., that enforce rules by design.

---

Want me to generate:
✅ a React component with full a11y practices?
✅ a testing example with `jest-axe` or `react-testing-library`?

Just say the word!
