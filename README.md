# **Roxiler System Assessment - Frontend & Backend**

This project involves building both **frontend** and **backend** systems to manage and visualize product transactions. The application supports **search**, **pagination**, and **data visualization** through bar and pie charts.

---

## **Backend Task**

### **Data Source**

- **Third-Party API URL:** [https://s3.amazonaws.com/roxiler.com/product_transaction.json](https://s3.amazonaws.com/roxiler.com/product_transaction.json)
- **Request Method:** `GET`
- **Response Format:** `JSON`

---

### **APIs to Implement**

1. **GET: Initialize the Database**
   - Fetch the **JSON** data from the third-party API.
   - Initialize the database with **seed data**.

2. **GET: List All Transactions**
   - API should support **search** and **pagination** on product transactions.
   - **Default Pagination Values:**
     - `page = 1`
     - `perPage = 10`

3. **GET: Statistics API**
   - **Total sale amount** of the selected month.
   - **Total number of sold items** in the selected month.

4. **GET: Bar Chart API**
   - Response should contain **price ranges** and the **number of items** in each range.

5. **GET: Pie Chart API**
   - Find **unique categories** and the **number of items** from that category.

6. **GET: Combined API**
   - Fetch and combine data from all the APIs above into one response.

---

## **Frontend Task**

### **Transactions Table**

- Use your **Transactions Listing API** to populate the table.
- **Select Month Dropdown:**
  - Options: **January** to **December**.
  - Default selection: **March**.
- **Search Box** to filter transactions by **title**, **description**, or **price**.
- **Pagination:**
  - **Next Button** to load the next page.
  - **Previous Button** to load the previous page.

---

### **Run Commands**

#### **Backend Setup**

```bash
cd mern-backend
npm install
npx nodemon app.js
