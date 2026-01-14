# ☕ Fun Fact API – Express Server

A simple and clean **Node.js + Express** backend application that demonstrates **server-to-server communication** using **axios**.
This API fetches a random fun fact from a public external API, reformats the data, and serves it through a custom endpoint.

---

## 🎯 Project Objectives

The goal of this project is to demonstrate:

-   Creating an Express server
-   Consuming a third-party API from the server
-   Using `axios` with `async/await`
-   Proper error handling for external API requests
-   Returning **clean, minimal API responses** to clients

This lab emphasizes **API abstraction** and **separation of concerns**—core backend development skills.

---

## 🧩 What This API Does

-   Exposes a custom endpoint at `/api/fun-fact`
-   Fetches a random fun fact from the **Useless Facts API**
-   Extracts and returns only the relevant data
-   Handles API and network errors gracefully

---

## 🚀 API Endpoints

### **GET /**

Returns a simple HTML response to confirm the server is running.

```html
<h1>Hello its not me</h1>
```

---

### **GET /api/fun-fact**

Fetches a random fun fact from an external API and returns it in a simplified JSON format.

#### ✅ Example Success Response

```json
{
    "fact": "A standard deck of cards is a calendar..."
}
```

#### ❌ Example Error Response

```json
{
    "message": "Error fetching data from external API."
}
```

---

## 🌐 External API Used

**Useless Facts API**
A free public API that provides random trivia.

-   Endpoint used:
    `https://uselessfacts.jsph.pl/api/v2/facts/random`
-   No API key required

---

## 🛠️ Built With

-   **Node.js**
-   **Express** – Web server framework
-   **Axios** – HTTP client for API requests
-   **JavaScript (ES6+)**

---

## 📂 Project Structure

```
fun-fact-api/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/structbase/Server-to-Server-Communication
```

---

```
cd Server-to-Server-Communication
```

---

### **2️⃣ Install dependencies**

```bash
npm install
```

---

### **3️⃣ Run the server**

```bash
node server.js
```

The server will start on:

```
http://localhost:3000
```

---

### **4️⃣ Test the API**

Open your browser or use a tool like **Insomnia** or **Postman**:

```
http://localhost:3000/api/fun-fact
```

Refresh to receive a new random fact each time.

---

## 🧠 Key Learning Takeaways

-   **Data shaping matters**: Clients should receive only what they need.
-   **Server-side API consumption** protects clients from external API changes.
-   **Error abstraction** prevents leaking implementation details.
-   `async/await` improves readability and error handling in asynchronous code.

---

## 📝 Reflection

Reformatting the data before sending it to the client ensures a clean and predictable API contract. This abstraction allows the client to remain unaffected by changes in the external API structure.

Using a generic error message in the response prevents exposing sensitive internal details while still allowing meaningful debugging on the server through logging.

This project demonstrates the importance of treating your backend as a **reliable intermediary** between clients and third-party services.

---

## ✍️ Author

Developed by **Abenezer**

> Junior Software Engineer
