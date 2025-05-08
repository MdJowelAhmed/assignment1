
function formatString(str:string, toUpperCase:boolean=true): string{
    if (toUpperCase) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}


type item={title:string,rating:number}[];

function filterByRating(books:item):item{
    return books.filter((book) => book.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
  }
  

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



function processValue(value:number | string):number{
    if(typeof value==="string"){
        return value.length;
    }
    else{
        return value * 2;
    }
}



interface Product{
    name:string;
    price:number;
}

function getMostExpensiveProduct(products:Product[]):Product | null {
    if (products.length === 0) {
        return null;
    }

    let mostExpensive = products[0];
    for(const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}


  

enum Day{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function getDayType(day : Day): string {
  if (day === Day.Friday || day === Day.Saturday) {
    return "Weekend";
  }
  return "Weekday";
}

  


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); 
    });
  }
  

   