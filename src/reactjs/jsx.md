# JSX

## What is JSX? How is it compiled?
### ✅ **What is JSX?**

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in **React** to describe UI elements:

```jsx
const element = <h1>Hello, Prem!</h1>;
```

It looks like HTML, but it’s not — it’s **syntactic sugar** for `React.createElement()`.

---

### ✅ **How JSX is Compiled**

JSX is not understood by browsers. It’s **compiled by Babel** into plain JavaScript like this:

```jsx
const element = <h1>Hello</h1>;
```

🔽 Compiled to:

```js
const element = React.createElement("h1", null, "Hello");
```

Or with props:

```jsx
const element = <button onClick={() => alert("Hi")}>Click Me</button>;
```

🔽 Becomes:

```js
const element = React.createElement(
  "button",
  { onClick: () => alert("Hi") },
  "Click Me"
);
```

---

### ✅ Summary Points (for interviews)

* JSX is syntactic sugar for `React.createElement()`.
* It’s not mandatory in React but makes code cleaner.
* JSX compiles using **Babel**.
* You can embed JS inside JSX using `{}`.
* JSX prevents injection attacks by escaping values.

---

Type `next` if you want JSX **dos & don’ts** or JSX in **class vs function components**.


---
---

### ✅ **JSX – Dos & Don’ts + Class vs Function Usage**

---

### ✅ **JSX Dos**

1. ✅ Use **fragments** (`<>...</>`) to avoid extra divs:

   ```jsx
   <>
     <h1>Title</h1>
     <p>Desc</p>
   </>
   ```

2. ✅ Embed JS expressions with `{}`:

   ```jsx
   <h1>Hello, {user.name}</h1>
   ```

3. ✅ Use ternary for conditional rendering:

   ```jsx
   {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
   ```

4. ✅ Use `map()` for lists with **key** prop:

   ```jsx
   {items.map(i => <li key={i.id}>{i.label}</li>)}
   ```

5. ✅ Use self-closing tags where needed:

   ```jsx
   <img src="logo.png" alt="logo" />
   ```

---

### ❌ **JSX Don'ts**

1. ❌ Don’t use `if-else` directly inside JSX:

   ```jsx
   // ❌ Wrong
   if (isValid) return <p>Ok</p>; else return <p>No</p>;
   ```

2. ❌ Don’t forget `key` in `map()`:

   ```jsx
   // ❌ Wrong
   items.map(i => <li>{i.label}</li>);
   ```

3. ❌ Don’t use inline functions carelessly (hurts performance in big lists):

   ```jsx
   <button onClick={() => doSomething()}>Click</button>
   ```

4. ❌ Don’t use HTML attributes like `class`, `for`:

   ```jsx
   // ❌ Wrong
   <div class="box" for="input">...</div>
   // ✅ Right
   <div className="box" htmlFor="input">...</div>
   ```

---

### ✅ JSX in Class vs Function Components

#### 🔹 Functional Component

```jsx
function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

#### 🔹 Class Component

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

👉 Today, **function components + hooks** are the modern standard.
Class components are rarely used in new codebases.

---

Reply with:

* `examples` → for JSX snippet pack
* `quiz` → JSX MCQ
* `jsx-edge` → JSX advanced usage (e.g., expressions, children, spreading props)
