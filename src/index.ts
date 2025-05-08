// problem 1 
function formatString(str:string, toUpperCase:boolean=true): string{
    if (toUpperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}


// console.log(formatString("Hello TypeScript"));       
// console.log(formatString("Hello Java script", false));  
// console.log(formatString("Hello mongoose", true)); 

type item={title:string,rating:number}[];

function filterByRating(books:item):item{
    return books.filter((book) => book.rating >= 4);
}
// const books = [
//     { title: "Book 1", rating: 4.5 },
//     { title: "Book 2", rating: 3.8 },
//     { title: "Book 3", rating: 4.2 },
//     { title: "Book 4", rating: 2.9 },
// ];
// console.log(filterByRating(books)); 

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
  }
  
// const numbers = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(numbers)


class Vehicle{
    private make:string;
    private year:number;

    constructor(make:string, year:number){
        this.make=make;
        this.year=year
    }

    public getInfo():string{
        return `make:${this.make},year:${this.year}`
    }
}

class Car extends Vehicle{
    private model:string;

    constructor(make:string,year:number,model:string){
        super(make,year);
        this.model=model;
    }

    public getModel():string{
        return `Model: ${this.model}`;
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");

// console.log(myCar.getInfo());   
// console.log(myCar.getModel());


function processValue(value:number | string):number{
    if(typeof value==="string"){
        return value.length;
    }
    else{
        return value * 2;
    }
}

console.log(processValue("Hello")); 
console.log(processValue(10));