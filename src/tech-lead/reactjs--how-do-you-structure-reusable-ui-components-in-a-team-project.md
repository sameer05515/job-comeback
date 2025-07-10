✅ Here's an interview-ready answer to:
**"How do you structure reusable UI components in a team project?"**

---

## 📦 Folder Structure for Reusable Components

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   ├── Button.module.css (or .scss/.ts)
│   │   └── index.js
│   ├── Modal/
│   ├── Input/
│   └── ...
```

> 🔁 Each component is isolated, tested, styled, and documented.

---

## ✅ My Approach

### 1. **Atomic Design or Feature-Based Layers**

I follow **Atomic Design** principles (or similar layers):

* `atoms/` → Button, Input, Label
* `molecules/` → FormField, Card
* `organisms/` → Navbar, Modal, TableWithFilters
* `templates/` → Page layouts
* `pages/` → Actual route-bound pages

---

### 2. **Standard Component Template**

Every component includes:

* ✅ `Component.jsx`
* ✅ `Component.test.jsx` (unit/UI test)
* ✅ `Component.stories.jsx` (Storybook)
* ✅ `Component.module.css` (scoped styles)

---

### 3. **Props-Driven & Generic**

Components are designed to be:

* 🔁 Reusable via `props`
* ♻️ Composable (`children`, `slots`)
* ⚙️ Configurable (variant, size, disabled, etc.)

```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Submit
</Button>
```

---

### 4. **Documentation via Storybook**

* Visualize all component states
* Document usage, props, edge cases
* Encourage team collaboration between devs & designers

---

### 5. **Style System**

* Use Tailwind, CSS Modules, or Theme-based tokens
* Follow a **design system** (e.g., Material, custom)
* Build consistency using design tokens (`spacing`, `color`, `z-index`)

---

### 6. **Shared Utils and Constants**

* Place UI helpers under `utils/`, `constants/` folders:

```js
// utils/classNames.js
export const classNames = (...args) => args.filter(Boolean).join(' ');
```

---

## 🧠 TL;DR: "Too Long; Didn't Read."

| Practice             | Benefit                             |
| -------------------- | ----------------------------------- |
| Folder per component | Easy maintenance & discovery        |
| Atomic layering      | Logical grouping by complexity      |
| Storybook + tests    | Visual + tested reusability         |
| Props + variants     | Configurable for multiple use cases |

---

Want a working template (React + Tailwind + Storybook + Atomic structure)? Just say the word!
