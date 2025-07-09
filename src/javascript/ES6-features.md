✅ Here's a list of key **ES6+ features** in JavaScript (includes ES6 to ES13+):

---

### 🔹 **ES6 (2015) – Major Features**

| Feature                    | Example                                               |
| -------------------------- | ----------------------------------------------------- |
| `let`, `const`             | Block-scoped variables                                |
| Arrow functions `=>`       | `const add = (a, b) => a + b;`                        |
| Template literals          | `` `Hello ${name}` ``                                 |
| Destructuring              | `const {name} = user;`                                |
| Default parameters         | `function greet(name = "Guest")`                      |
| Spread/rest operator `...` | `const newArr = [...arr]`                             |
| `for...of` loop            | `for (let val of arr)`                                |
| Object shorthand           | `{ name, age }` instead of `{ name: name, age: age }` |
| Computed property names    | `{ [key]: value }`                                    |
| Promises                   | `new Promise((res, rej) => {...})`                    |
| Classes                    | `class User { constructor(name) { ... } }`            |
| Modules (import/export)    | `import x from './file.js'`                           |

---

### 🔹 **ES7 (2016)**

* `Array.prototype.includes()`
* `**` exponentiation operator

  ```js
  2 ** 3 === 8
  ```

---

### 🔹 **ES8 (2017)**

* `async/await`
* `Object.values()`, `Object.entries()`
* `String.prototype.padStart()`, `padEnd()`
* `Object.getOwnPropertyDescriptors()`

---

### 🔹 **ES9 (2018)**

* Rest/Spread for objects

  ```js
  const { a, ...rest } = obj;
  ```
* Asynchronous Iteration: `for await...of`
* `Promise.prototype.finally()`

---

### 🔹 **ES10 (2019)**

* `Array.prototype.flat()`
* `Array.prototype.flatMap()`
* Optional `catch` binding: `catch { ... }`
* `Object.fromEntries()`
* `trimStart()` / `trimEnd()`

---

### 🔹 **ES11 (2020)**

* **Optional Chaining `?.`**

  ```js
  const city = user?.address?.city;
  ```
* **Nullish Coalescing `??`**

  ```js
  const name = input ?? 'Guest';
  ```
* `Promise.allSettled()`
* `globalThis`

---

### 🔹 **ES12 (2021)**

* Logical assignment operators `||=`, `&&=`, `??=`
* `replaceAll()`
* Numeric separators: `1_000_000`

---

### 🔹 **ES13 (2022) and Later**

* `at()` method for arrays and strings
* `Error.cause` for better error tracing
* Top-level `await` (ES2022 Modules only)
* `Object.hasOwn(obj, key)`
* Class `static` blocks

---

### ✅ Summary Line for Interview:

> "ES6+ introduced modern features like `let/const`, arrow functions, destructuring, classes, promises, async/await, optional chaining, and more — significantly improving JavaScript readability and functionality."

Let me know if you want code examples for any group!
