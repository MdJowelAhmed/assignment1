# Interface vs Type in TypeScript

In TypeScript, **`interface`** and **`type`** help us define the **shape of data**, like what properties an object should have. Though they can often be used similarly, there are some key differences.

---

### ** Basic Structure Definition**

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


### ** Extending or Inheriting**

You can create a new type based on an existing one. This is called extending or inheriting.

// With interface
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// With type
type Animal = { name: string };
type Dog = Animal & { breed: string };

