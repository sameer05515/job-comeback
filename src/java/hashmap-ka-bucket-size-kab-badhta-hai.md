Good question 👌 — HashMap ke **bucket size** (actually array size / capacity) tabhi badhta hai jab **rehashing** hota hai.

### Java HashMap me Capacity Grow Hone ka Rule:

1. **Initial Capacity** → Default 16 hoti hai.
2. **Load Factor** → Default 0.75 hota hai.

   * Iska matlab: jab `size > capacity * loadFactor` ho jaata hai → HashMap **resize** karega.
   * Example: `16 * 0.75 = 12` → 13th element insert karte hi resize hoga.
3. **Resize / Rehashing** → Capacity **2x** ho jaati hai (16 → 32 → 64 …). Sab entries **rehash** karke naye buckets me daali jaati hain.

### Ek aur Point (Java 8 se onward):

* Agar **ek bucket ke linked list ka size > 8** aur total capacity >= 64 → us bucket ki linked list ko **TreeNode (balanced tree)** me convert kar diya jata hai (performance ke liye).
* Lekin yeh bucket ka size grow hona nahi hai, balki bucket ke **andar ka structure** linked list → tree ban jaata hai.

---

👉 **Summary (interview line):**
HashMap me bucket ka size (capacity) tab badhta hai jab elements ki count `capacity * loadFactor` se zyada ho jata hai → rehashing hoti hai aur array ka size **double** kar diya jata hai.

---

Chaho to main ek **short Java code demo** likh du jo dikha de ki HashMap kab resize hota hai (rehashing trigger hone ka point)?
