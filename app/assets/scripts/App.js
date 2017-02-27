function Person(name, favColor) {
    this.name = name;
    this.favColor = favColor;

    this.greet = function () {
        document.write(`Hello ${this.name}. I like  ${this.favColor}`);
    }
}

const john = new Person('John Doe', 'blue');
john.greet();