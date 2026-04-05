# 📊 User Processing Service

![Node.js](https://img.shields.io/badge/node-%3E%3D14-green)
![Tests](https://img.shields.io/badge/tests-Jest-blue)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A simple and efficient JavaScript service to process user data and generate useful analytics.

This project demonstrates core JavaScript concepts, clean code practices, and unit testing using Jest — with a focus on real-world scenarios such as async data handling and mocking.

---

## 🚀 Features

- ✅ Filter active adult users  
- 📈 Calculate average age  
- 🔢 Count minor users  
- 👥 Count total active users  
- 🧪 Fully tested with Jest  
- 🎯 Mocked API for controlled testing  

---

## 📥 Input Example

~~~javascript
[
  { id: 1, name: "Pedro", age: 25, active: true },
  { id: 2, name: "Ana", age: 17, active: false },
  { id: 3, name: "João", age: 30, active: true },
  { id: 4, name: "Maria", age: 22, active: true },
  { id: 5, name: "Carlos", age: 15, active: false }
]
~~~

---

## 📤 Output Example

~~~javascript
{
  activeAdults: ["Pedro", "João", "Maria"],
  averageAge: 21.8,
  minorsCount: 2,
  totalActive: 3
}
~~~

---

## 🧠 Concepts Covered

This project focuses on:

- `async/await`
- Array methods: `map`, `filter`, `reduce`
- Error handling with `try/catch`
- Dependency injection (for testability)
- Unit testing with Jest
- Mocking with `jest.fn()`

---

## 🧪 Running Tests

Install dependencies:

~~~bash
npm install
~~~

Run tests:

~~~bash
npm test
~~~

---

## 🧩 Example Usage

~~~javascript
const { processUsers } = require('./feature');

processUsers()
  .then(result => console.log(result))
  .catch(error => console.error(error));
~~~

---

## 🔧 Testing Strategy

The project uses mocked functions to simulate API behavior:

~~~javascript
const mock = jest.fn().mockRejectedValue(new Error("API ERROR!"));
~~~

This allows testing:

- Success scenarios ✅  
- Failure scenarios 💥  
- Edge cases ⚠️  

---

## 📁 Project Structure

~~~
├── feature.js        # Core logic
├── test.spec.js      # Unit tests
├── package.json
└── README.md
~~~

---

## 💡 Why This Project Matters

This project simulates a real-world scenario where:

- Data comes from an external source (API)
- Logic must be reliable and testable
- Errors must be handled properly
- Tests should not depend on real services

---

## 👨‍💻 Author

Pedro Nunes  
QA Automation Engineer  
