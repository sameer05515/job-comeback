# write sql query to delete duplicate records (identified by name).

> ```sql
> -- create
> CREATE TABLE EMPLOYEE (
>   empId INTEGER PRIMARY KEY,
>   name TEXT NOT NULL,
>   dept TEXT NOT NULL
> );
> 
> -- insert
> INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
> INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
> INSERT INTO EMPLOYEE VALUES (0003, 'Ava', 'Sales');
> INSERT INTO EMPLOYEE VALUES (0004, 'Clark', 'Sales');
> INSERT INTO EMPLOYEE VALUES (0005, 'Dave', 'Accounting');
> INSERT INTO EMPLOYEE VALUES (0006, 'Ava', 'Sales');
> INSERT INTO EMPLOYEE VALUES (0007, 'Prem', 'Sales');
> INSERT INTO EMPLOYEE VALUES (0008, 'Sameer', 'Accounting');
> INSERT INTO EMPLOYEE VALUES (0009, 'Nandu', 'Sales');
> 
> ```


Here’s one way to delete duplicates **based on `name`**, keeping the row with the smallest `empId`:

```sql
DELETE FROM EMPLOYEE
WHERE empId NOT IN (
    SELECT MIN(empId)
    FROM EMPLOYEE
    GROUP BY name
);
```

**How it works:**

* `SELECT MIN(empId) ... GROUP BY name` → finds the first occurrence of each name.
* `DELETE ... WHERE empId NOT IN (...)` → removes all other rows with the same name.

---

If your DB supports **CTE with `ROW_NUMBER()`** (like PostgreSQL, MySQL 8+, SQL Server), you can do:

```sql
WITH duplicates AS (
    SELECT empId,
           ROW_NUMBER() OVER (PARTITION BY name ORDER BY empId) AS rn
    FROM EMPLOYEE
)
DELETE FROM EMPLOYEE
WHERE empId IN (
    SELECT empId FROM duplicates WHERE rn > 1
);
```

---

Do you want me to also give you a **single query that both shows duplicates and deletes them** so you can verify before running `DELETE`? That’s common in interviews.


---
---

# a **single query that both shows duplicates and deletes them** so you can verify before running `DELETE`

You can’t literally **show and delete in one SQL execution** because `SELECT` and `DELETE` serve different purposes —
but you can prepare **one CTE query** that:

1. **Identifies duplicates** (so you can run it as a `SELECT` first to verify),
2. **Then switch it to `DELETE`** without rewriting the logic.

Example using `ROW_NUMBER()` (works in MySQL 8+, PostgreSQL, SQL Server, Oracle, etc.):

```sql
-- Step 1: Verify duplicates
WITH duplicates AS (
    SELECT empId,
           name,
           dept,
           ROW_NUMBER() OVER (PARTITION BY name ORDER BY empId) AS rn
    FROM EMPLOYEE
)
SELECT * FROM duplicates WHERE rn > 1;
```

If the output is correct, just **change `SELECT` to `DELETE`**:

```sql
-- Step 2: Delete duplicates
WITH duplicates AS (
    SELECT empId,
           ROW_NUMBER() OVER (PARTITION BY name ORDER BY empId) AS rn
    FROM EMPLOYEE
)
DELETE FROM EMPLOYEE
WHERE empId IN (SELECT empId FROM duplicates WHERE rn > 1);
```

This way, the **same CTE** is used for both verification and deletion —
you just change one line when you’re ready.

---

If you want, I can give you a **transaction-safe version** where you can *preview and then commit or rollback* in the same run. That’s often the safest in production.
