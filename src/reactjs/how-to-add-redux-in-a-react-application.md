Here’s a **step-by-step guide** to add **Redux** to a React application using modern Redux Toolkit:

---

### ✅ **Step 1: Install Required Packages**

```bash
npm install @reduxjs/toolkit react-redux
```

---

### ✅ **Step 2: Create Redux Store**

Create a file: `store.js`

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

---

### ✅ **Step 3: Create a Slice**

Create a file: `features/counterSlice.js`

```js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    reset: state => { state.value = 0 }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
```

---

### ✅ **Step 4: Provide Store to React App**

Update `index.js`:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

---

### ✅ **Step 5: Use Redux State and Dispatch in Component**

```js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './features/counterSlice'

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
```

---

Let me know if you'd like me to generate this in a working GitHub repo or zip structure.


---
---

# only react-redux

If you want to use only `react-redux` **without Redux Toolkit**, follow these steps:

---

### ✅ Step 1: Install `redux` and `react-redux`

```bash
npm install redux react-redux
```

---

### ✅ Step 2: Create Redux Components

#### 📁 `actions/counterActions.js`

```js
export const increment = () => ({ type: 'INCREMENT' })
export const decrement = () => ({ type: 'DECREMENT' })
```

---

#### 📁 `reducers/counterReducer.js`

```js
const initialState = { count: 0 }

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
```

---

#### 📁 `store.js`

```js
import { createStore } from 'redux'
import { counterReducer } from './reducers/counterReducer'

const store = createStore(counterReducer)
export default store
```

---

### ✅ Step 3: Wrap App with `Provider`

#### 📁 `index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

---

### ✅ Step 4: Use in Component

#### 📁 `Counter.js`

```js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counterActions'

const Counter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
```

---

Let me know if you also want `combineReducers` or middleware (like logger or thunk).
