class Worker {
	#name;
	#surname;
	#rate;
	#days;

	constructor(name, surname, rate, days) {
		this.#name = name;
		this.#surname = surname;
		this.#rate = rate;
		this.#days = days;
	}

	getName() {
		return this.#name;
	}

	getSurname() {
		return this.#surname;
	}

	getRate() {
		return this.#rate;
	}

	setRate(value) {
		return this.#rate = value;
	}

	getDays() {
		return this.#days;
	}

	setDays(value) {
		return this.#days = value;
	}

	getSalary() {
		return +this.#rate * +this.#days;
	}

	static getSumSalary(worker1, worker2) {
		return worker1.getSalary() + worker2.getSalary();
	}

}

let worker1 = new Worker('Иван', 'Иванов', 10, 31);
let worker2 = new Worker('Лена', 'Иванова', 50, 25);

console.log(worker1.getName());
console.log(worker1.getSurname());
console.log(worker1.getRate());
console.log(worker1.getDays());
console.log(worker1.setRate(20));
console.log(worker1.setDays(10));
console.log(worker1.getSalary());

console.log(Worker.getSumSalary(worker1, worker2));

console.log('--------------------------------------------------');

class MyString {

	reverse(string) {
		let result = '';
		for(let i = string.length; i > 0; i--) {
			result += string[i - 1];
		}
		return result;
	}

	ucFirst(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	ucWords(string) {
    let result = string.split(' ').map(function(word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
    return result;
	}
}


let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));

console.log('--------------------------------------------------');

class Validator {

	isEmail(email) {
		const regexStr = /^[0-9A-Za-z\_\-]+\@[a-z\-\_]+\.[a-z]{3}$/;
		const regex = new RegExp(regexStr);
		return regex.test(email);
	}

	isDomain(domain) {
		const regexStr = /^[0-9A-Za-z\_\-]+\.[a-z]{2,4}$/;
		const regex = new RegExp(regexStr);
		return regex.test(domain);
	}

	isDate(date) {
		const regexStr = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
		const regex = new RegExp(regexStr);
		return regex.test(date);
	}

	isPhone(phone) {
		const regexStr = /^\+[0-9]{2}[ ]{1}\([0-9]{3}\)[ ]{1}[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/;
		const regex = new RegExp(regexStr);
		return regex.test(phone);
	}
}

let validator = new Validator();

console.log(validator.isEmail('rydaya97@gmail.com')); 
console.log(validator.isDomain('phphtml.not'));
console.log(validator.isDate('21.11.1997'));
console.log(validator.isPhone('+38 (066) 198-80-05'));