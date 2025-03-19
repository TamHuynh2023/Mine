let car = "toyota"
let num: number = 20

let isChange: boolean = false



let idol: {
    name: string,
    cup: number
} = {
    name: "yua mikami",
    cup: 100
}


let song: string[] = []
song.push("xuan da ve", "tet den that roi")


let power: {
    name: string,
    top: number
}[] = []
power.push({
    name: "putin",
    top: 1
})

function noName(num1: number, num2: number): number {
    return num1 + num2
}

const noThing = (num1: number, num2: number): number => num1 * num2


const noProblem: (num1: number, num2: number) => number = (
    num1: number, 
    num2: number
) => num1 - num2



let love: {name: string | number } | {age: number | false} = {
    name: "ngoc yen",
    age: 0
}


enum sizes {
    l= "l",
    m = "m",
    xl = "xl"
}
let size = sizes.l


interface city {
    name: string, 
    population: number
}
interface city {
    isChange: boolean
}
let city: city = {
    name: "da nang",
    population: 2000,
    isChange: true
}




type animal = {
    name: string, 
    sex: string
}
type land = {
    name: string,
    age: number
}
type total = animal & land



const handleClick = <type>(value: type) => value
let value = "100"
handleClick<string>(value)


const newHandle = <type>(value: type) => value
newHandle<number>(20)





class result {
    public name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
let total = new result("minhtam", 23)
total.name = "ngoc yen"


class final {
    constructor(public favorite: string, public asset: boolean) {
        this.favorite = favorite,
        this.asset = asset
    }
}