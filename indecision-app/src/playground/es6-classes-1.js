
class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `${this.name} says 'Hi!'`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHomeLocoation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let description = super.getDescription()

        if (this.hasHomeLocoation()) {
            description += ` I'm visiting from ${this.homeLocation}`
        }

        return description
    }
}

const me = new Traveler('Rick Lemmen', 32, 'Rijkevoort')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())