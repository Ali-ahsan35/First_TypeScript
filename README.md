# Understanding TypeScript: Unlocking the Power of `keyof` and Type Safety with `any`, `unknown`, and `never`

TypeScript is a powerful superset of JavaScript that introduces static typing, making code more reliable and easier to maintain. In this blog post, we’ll explore two important concepts: the `keyof` keyword and the differences between `any`, `unknown`, and `never`.

---

## 1. What is the use of the `keyof` keyword in TypeScript?

The `keyof` keyword is used to extract the keys of a given type as a **union of string literal types**.

### Why is it useful?

It helps create more dynamic and type-safe code when working with object properties. For example, when building utility functions like getters or mappers, `keyof` ensures that only valid property names are used.

### Example:

```ts
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

type PersonKeys = keyof Person; // 'name' | 'age' | 'isStudent'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = {
    name: "Alice",
    age: 22,
    isStudent: true,
};

console.log(getProperty(person, "name"));       // Alice
// console.log(getProperty(person, "email"));   // Error: Argument of type '"email"' is not assignable
```

`keyof` makes this generic utility function **type-safe** by ensuring only the keys of the `Person` type are allowed.

---

## 2. Difference between `any`, `unknown`, and `never` in TypeScript

TypeScript offers several top-level types for handling unknown values. Understanding the distinction between `any`, `unknown`, and `never` helps us write safer and more maintainable code.

---

### `any`

The `any` type disables type checking altogether. It's a fallback to plain JavaScript and should be avoided in most cases.

```ts
let value: any = "hello";
value = 42;        // No error
value.toFixed();   // No error, but might crash at runtime
```

> Use `any` **only when migrating JavaScript code** or as a last resort.

---

### `unknown`

`unknown` is a safer alternative to `any`. It **forces you to check the type** before using it.

```ts
let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase()); // Safe to use
}
```

>  Use `unknown` when you don’t know the type **yet**, but you want to ensure type checks before usage.

---

### `never`

`never` represents values that **never occur** — for example, functions that throw errors or have infinite loops.

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

It’s also used by TypeScript’s exhaustiveness checks:

```ts
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
    switch (shape) {
        case "circle": return 3.14;
        case "square": return 4;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

>  Use `never` for **exhaustive type checking** and unreachable code paths.

---

So, we can see that
 `keyof` helps build generic, type-safe utilities, while knowing when to use `any`, `unknown`, or `never` allows for more predictable behavior and maintainability.

---
