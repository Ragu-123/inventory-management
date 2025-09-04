# Inventory Management System

This project is a web-based **Inventory Management System (IMS)** built with React. It provides a user-friendly interface for small business owners to manage their product inventory, track sales, and handle customer checkouts digitally, replacing manual record-keeping

---

## 📸 Screenshots

- Product Catalog
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7600c734-1e9e-4787-99fa-268c7d1d503b" />

- Inventory Management
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/189a894a-66c9-4a36-9b27-ac89590d6f19" />

- Sales Records
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d3df2da1-32df-41a9-b7a2-be349c1559d2" />

- Add product
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/da10cbb2-2ce4-4cd8-be22-6bc9c14ee904" />


---

## ✨ Features
- **Product Management**: Add new products with details like name, image, price, initial stock, and tags.  
- **Dynamic Inventory**: The inventory list displays all products, their current stock, and their price.  
- **Low Stock Alerts**: Products with stock below a user-defined "alert value" are visually highlighted in red for easy identification.  
- **Shopping Cart**: A fully functional cart where users can add products, adjust quantities, and remove items.  
- **Checkout System**: The checkout process finalizes the purchase, creates a sales record, and automatically deducts the sold quantities from the inventory stock in real-time.  
- **Sales Tracking**: All sales are logged and can be viewed on the Sales page, sorted from the most recent to the oldest.  
- **Data Persistence**: All inventory, cart, and sales data is saved in the browser's local storage, so your data persists between sessions.  
- **Input Validation**: Forms prevent the submission of negative values for price and stock, ensuring data integrity.  

---

## 🛠️ Tech Stack
- **Frontend**: React.js  
- **State Management**: React Context API with useReducer  
- **Styling**: TailwindCSS  
- **Routing**: React Router  
- **Local Storage**: Data persisted in the browser using a custom `useLocalStorage` hook  

---

## ⚙️ Setup and Run Locally
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js (v14 or later)  
- npm  

### Installation
Clone the repository:

```bash
git clone https://github.com/Ragu-123/inventory-management.git
```

Navigate to the project directory:

```bash
cd inventory-management\inventory-management-frontend
```

Install NPM packages:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).
