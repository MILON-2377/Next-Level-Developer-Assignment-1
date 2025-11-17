const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
};

const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  }

  return value.length;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface IArray {
  title: string;
  rating: number;
}

const filterByRating = (arr: IArray[]): IArray[] => {
  const filteredArr = arr.reduce((acc: IArray[], currentItem: IArray) => {
    if (currentItem.rating >= 4) {
      acc.push(currentItem);
    }

    return acc;
  }, []);

  return filteredArr;
};

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (arr: IUser[]): IUser[] => {
  const activeUsers = arr.reduce(
    (acc: IUser[], currentUser: IUser): IUser[] => {
      if (currentUser.isActive) {
        acc.push(currentUser);
      }

      return acc;
    },
    []
  );

  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (obj: Book) => {
  console.log(
    `Title: ${obj.title}, Author: ${obj.author}, Published: ${
      obj.publishedYear
    }, Available: ${obj.isAvailable ? "Yes" : "No"}}`
  );
};

type Arr = (string | number)[];

const getUniqueValues = (arr1: Arr, arr2: Arr): Arr => {
  const uniqueArr: Arr = [];

  if (arr1.length > 0) {
    uniqueArr[0] = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
      let counter = 0;
      for (let j = 0; j < uniqueArr.length; j++) {
        if (arr1[i] === uniqueArr[j]) {
          counter++;
          break;
        }
      }

      if (counter === 0) {
        const currentIdx = uniqueArr.length;
        uniqueArr[currentIdx] = arr1[i];
      }
    }
  }

  if (uniqueArr.length === 0 && arr2.length > 0) {
    uniqueArr[0] = arr2[0];
  }

  if (arr2.length > 0) {
    for (let i = 0; i < arr2.length; i++) {
      let counter = 0;
      for (let j = 0; j < uniqueArr.length; j++) {
        if (arr2[i] === uniqueArr[j]) {
          counter++;
          break;
        }
      }

      if (counter === 0) {
        const currentIdx = uniqueArr.length;
        uniqueArr[currentIdx] = arr2[i];
      }
    }
  }

  return uniqueArr;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}


const calculateTotalPrice = (products: Product[]): number => {
  const totalPrice: number = products.reduce((acc, currentProduct) => {
    const discount = currentProduct.discount ?? 0;
    const price =
      currentProduct.price * currentProduct.quantity;
    
    const discountedPrice = (price * discount) / 100;

    const priceAfterDiscount = price - discountedPrice;

    return acc + priceAfterDiscount;
  }, 0);

  return totalPrice;
};
