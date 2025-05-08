# Interface vs Type in TypeScript

In TypeScript, **`interface`** and **`type`** help us define the **shape of data**, like what properties an object should have. Though they can often be used similarly, there are some key differences.

---

### **🔹 Basic Structure Definition**

Both `interface` and `type` can be used to describe the shape of an object (like what properties it has):

```ts
// Using interface
interface User {
  name: string;
  age: number;
}

// Using type
type User = {
  name: string;
  age: number;
}
