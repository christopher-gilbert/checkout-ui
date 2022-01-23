import './App.css'; 
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (  
    <>
    <div>
      <h1>Online Checkout - Home</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        <Link to="/stock-management">Stock Management</Link> | {" "}
        <Link to="/checkout">Checkout</Link>
      </nav>
    </div>
    <Outlet />
    </>
  );
}      
