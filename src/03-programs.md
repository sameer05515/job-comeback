# Java + Spring boot + Microservices

- [java me stream produce karne ke different tareeke](./java-8/stream-produce-karne-ke-different-tareeke.md)

- [Merge & Sort -without duplicates](./java-8/programs/007.md)
```java
Integer[] arr1 = {3, 5, 7, 9};
Integer[] arr2 = {3, 4, 6, 9};
```

- [please explain what will be output of below program?](./java/programs/003.md)

```java
public class Main{
static int x=0;
static { x=x++ + ++x + x-- + --x;}
{ x=x++ + ++x;}
public static void main(String[] args){
new Main();
System.out.println(x);
}
}
```

- [Print word frequency map in ascending order of frequency](./java-8/programs/006.md)

- [write a java program to print current date time on interval of 1 second](./java/programs/002.md)

- [Write java 8+ program to create a map having deptId and list of Employee names from given employee list](./java-8/programs/005.md)

- [Given list of Employees (id, name,age) . Write java 8 code to sort employees in ascending order of age.](./java-8/programs/005.md)

- [java program to Check if one string is a rotation of another](./java/programs/001.md)

- [Java 8+ program using Streams to find common elements in all three arrays](./java-8/programs/004.md)

- [stream question](./java-8/programs/003.md)

- write a program to reverse a string

- Write a java stream program to find 3rd largest number from given array

- [Java Multithreading Interview 🔥 | Producer–Consumer using wait/notify & BlockingQueue](./java/programs/producerconsumer-using-waitnotify--blockingqueue.md)

- [Spring Batch for Beginners | Process Million of Record Faster Using Spring Batch](https://www.youtube.com/watch?v=hr2XTbKSdAQ)

- [Java Executor Framework Mastery! 🚀 | Boost Your Code Performance 100x](https://www.youtube.com/watch?v=ip68xxgffC8)



---
---

# React + Javascript

- [ES6 Features](./javascript/ES6-features.md)

- [what will be output of (10+"1"-2)?](./javascript/programs/001.md)

- [code to print only repeated values with occurence count>1 in given array](./javascript/programs/002.md)
```js
const arr = [5, 4, 1, 7, 9, 5, 7, 8, 7];
```

- [What is the console output of below program](./reactjs/programs/002.md)

```js
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("effect runs");
    return () => {
      console.log("Cleanup runs");
    };
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click</button>;
}
```

- [please explain, why ```<input value="Hello" />``` is not editable](./reactjs/programs/001.md)

```js
export default function App() {
return (
<>
    <input defaultValue="Hello" />
    <input value="Hello" />
</>
);
}

```

---
---

# SQL

- [write sql query to delete duplicate records (identified by name).](./sql/sql-query-to-delete-duplicate-records-identified-by-name.md)

```sql

-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');
INSERT INTO EMPLOYEE VALUES (0004, 'Clark', 'Sales');
INSERT INTO EMPLOYEE VALUES (0005, 'Dave', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0006, 'Ava', 'Sales');
INSERT INTO EMPLOYEE VALUES (0007, 'Prem', 'Sales');
INSERT INTO EMPLOYEE VALUES (0008, 'Sameer', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0009, 'Nandu', 'Sales');

```

- [Write a query to return all customer count having duplicate email and phone values](./sql/002.md)

- [sql question](./sql/001.md)

- [Write a query to find largest number from a table (say column is id, integer value)](./sql/003.md)
- [write query to find third largest salary](./sql/003.md)

---
---

# NoSQL


---
---
