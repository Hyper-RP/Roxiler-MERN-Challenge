# **Roxiler MERN Challenge - Backend**

This project is built using the **MERN stack** (MongoDB, Express, React, Node.js) to manage and visualize product transactions. The app supports **search**, **pagination**, **statistics**, and **data visualization** using bar and pie charts.

---

## **Backend Task**

### **Data Source**

- **Third-Party API URL:** [https://s3.amazonaws.com/roxiler.com/product_transaction.json](https://s3.amazonaws.com/roxiler.com/product_transaction.json)  
- **Request Method:** `GET`  
- **Response Format:** `JSON`

---

### **APIs to Implement**

1. **GET: Initialize the Database**
   - Fetch the JSON data from the third-party API.
   - Initialize the database with seed data.

2. **GET: List All Transactions**
   - API should support **search** and **pagination** on product transactions.
   - **Default Pagination Values:**
     - `page = 1`
     - `perPage = 10`

---

### **Run Commands**

#### **Backend Setup**

```bash
cd mern-backend
npm install
npx nodemon app.js



