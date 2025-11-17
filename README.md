# TypeScript Essentials — Interfaces, Types & `keyof` Keyword

এই সম্পূর্ণ গাইডে TypeScript-এর দুটি অত্যন্ত গুরুত্বপূর্ণ কনসেপ্ট নিয়ে আলোচনা করা হয়েছে:
**Interface বনাম Type** এবং **`keyof` keyword`**।

---

## Table of Contents

1. [Interface ও Type-এর মধ্যে পার্থক্য](#প্রশ্ন-১-typescript-এ-interface-এবং-type-এর-মধ্যে-পার্থক্য-কী)
2. [`keyof` keyword এর ব্যবহার](#প্রশ্ন-২-typescript-এ-keyof-keyword-এর-ব্যবহার-কী)
3. [Conclusion](#conclusion)

---

## প্রশ্ন ১: TypeScript-এ Interface এবং Type-এর মধ্যে পার্থক্য কী?

TypeScript-এ **interface** এবং **type alias** দুটোই object-এর structure define করতে ব্যবহৃত হয়, তবে এদের মধ্যে কয়েকটি বড় পার্থক্য থাকে।

---

### ১. Declaration Merging (শুধু interface merge হয়)

**Interface merge হতে পারে**, কিন্তু **type merge হয় না**।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = { name: "Milon", age: 25 };
```

---

### ২. Extends vs Intersection (Inheritance Difference)

- Interface → extends ব্যবহার করে
- Type → & (intersection) ব্যবহার করে

**Interface Example:**

```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark(): void;
}
```

**Type Example:**

```ts
type Animal = { name: string };
type Dog = Animal & { bark(): void };

```

---

### ৩. Type alias বেশি Flexible

Type দিয়ে union, intersection, tuple, primitive সব define করা যায়। Interface কেবল object structure-এর জন্য।

```ts
type ID = string | number;
type UserRole = "user" | "admin";
type IsActive = UserRole & boolean;
type Point = [number, number];
type Status = "success" | "error";

```

---

### ৪. Syntax Readability

**Interface → clean & readable**

```ts
interface Person {
  name: string;
  age: number;
}
```

**Type → expression-like**

```ts
type Person = {
  name: string;
  age: number;
};
```

---

## প্রশ্ন ২: TypeScript-এ `keyof` keyword এর ব্যবহার কী?

`keyof` ব্যবহার করে কোনো object type-এর সবগুলো key কে string literal union হিসেবে পাওয়া যায়। এটি **type-safe property access** নিশ্চিত করে।

---

**Example 1:** - Basic Usage

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

type UserKeys = keyof User; // "name" | "age" | "isAdmin"
```

---

### keyof দিয়ে টাইপ-সেফ Getter Function

`keyof` + generics ব্যবহার করে আমরা এমন একটি function বানাতে পারি যা **শুধুমাত্র valid key** accept করবে।

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

#### ব্যাখ্যা:

- **T** → object-এর type
- **K** → object-এর সেই keys যেগুলো `keyof T` থেকে আসে
- invalid key দিলে TypeScript error দেবে

**Example:**

```ts
const user = { name: "Milon Miah", age: 23 };

getValue(user, "name"); // Valid
getValue(user, "age");  // Valid
// getValue(user, "email"); Error — "email" নেই
```

### কেন Error হয়?

Object:

```ts
{
  name: string;
  age: number;
}
```

`keyof` → "name" | "age"

| দেওয়া key  | object-এ আছে? | ফলাফল                 |
| --------- | ------   | -------------------- |
| `"name"`  | আছে         | Valid                |
| `"age"`   | আছে         | Valid                |
| `"email"` | নেই         |  Compile-time Error 

এটি ভুল property access বন্ধ করে—এটাই TypeScript-এর type safety।

---

## কেন keyof + Generics ব্যবহার করা হয়?

- Completely type-safe property access
- ভুল key থেকে নিরাপদ
- Reusable utility function তৈরি করা যায়
- form builder, table column generator, API handler—সব জায়গায় ব্যবহৃত

---

## Conclusion

- **Interface** → object modeling-এর জন্য best
- **Type alias** → union, tuple, primitive, complex type-এর জন্য best
- **keyof** → object-এর key-গুলোকে type-safe রাখার জন্য অত্যন্ত গুরুত্বপূর্ণ






























