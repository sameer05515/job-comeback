A **distributed transaction** is a transaction that **spans multiple independent systems or databases** (often on different machines or locations) but must behave as a **single logical unit of work**.

### 🔑 Simple idea

Instead of updating just one database, a distributed transaction updates **several systems at once**, and all of them must either:

* **Commit (succeed together)** ✅
* **Rollback (fail together)** ❌

This ensures **data consistency** across all systems.

---

### 📌 Example

Imagine an online shopping system:

1. **Order Service** → creates order
2. **Payment Service** → charges customer
3. **Inventory Service** → reduces stock

These are separate systems, but the transaction must be consistent:

* If payment fails → order should NOT be created
* If inventory update fails → payment should be reversed

👉 All steps must succeed, or none should.

---

### ⚙️ Key Properties

Distributed transactions follow **ACID properties**:

* **Atomicity** → all-or-nothing execution
* **Consistency** → system stays valid
* **Isolation** → transactions don’t interfere
* **Durability** → committed changes persist

---

### 🔄 How it works (basic idea)

A common protocol used is **Two-Phase Commit (2PC)**:

1. **Prepare phase**

   * Coordinator asks all systems: “Can you commit?”
2. **Commit phase**

   * If all agree → commit
   * If any fail → rollback everywhere

---

### ⚠️ Challenges

Distributed transactions are powerful but difficult:

* Network failures can interrupt coordination
* Slower performance due to communication overhead
* Complex error handling
* Risk of system blocking (especially in 2PC)

---

### 🧠 Modern alternative

Instead of strict distributed transactions, many systems use:

* **Eventual consistency**
* **Saga pattern** (series of local transactions with compensating actions)

---

### ✅ In short

A **distributed transaction** ensures that **multiple systems act as one transaction**, maintaining consistency even across different machines.

---

If you want, I can explain **2PC**, **Saga pattern**, or give a **real-world code example**.
