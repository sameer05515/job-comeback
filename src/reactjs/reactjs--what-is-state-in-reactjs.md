In **ReactJS**, **state** is a built-in object that stores property values that **belong to the component**. When the state changes, the component **re-renders automatically**, reflecting the latest data in the UI.

---

### 🔹 Example using Functional Component with `useState`

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count is the state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### 📌 Key Points:

* `useState(0)` initializes state with value `0`.
* `count` holds the state value.
* `setCount` is used to update state.
* State updates cause **re-rendering** of the component.

Let me know if you want a class-based version too.
