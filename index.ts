{
    //
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper) {
            return input.toUpperCase();
        }
        else if (toUpper === undefined) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase()
        }
    }

    function filterByRating(
        items: { title: string; rating: number }[]
    ): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
    }

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = [];

        for (const element of arrays) {
            result.push(...element);
        }
        return result;
    }

    class Vehicle {

        constructor(private make: string, private year: number) { }

        getInfo(): string {
            return `Make: ${this.make}, year: ${this.year}`
        }

    }

    class Car extends Vehicle {

        constructor(make: string, year: number, private model: string) {
            super(make, year);
        }

        getModel(): string {
            return `Model: ${this.model}`
        }

    }

    const myCar = new Car("Toyota", 2020, "Corolla");

    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            return value * 2;
        }
    }

    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }

        let maxProduct = products[0];

        for (const product of products) {
            if (product.price > maxProduct.price) {
                maxProduct = product;
            }
        }
        return maxProduct;
    }

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }

    async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000); // 1 second delay
        });
    }


    // 
}