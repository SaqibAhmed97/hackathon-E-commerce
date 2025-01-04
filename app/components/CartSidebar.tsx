"use client"
import { useState } from 'react';
import styles from './CartSidebar.module.css';

// Define types for cart items
interface CartItem {
  id: number;
  name: string;
  price: string;
}

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = (): void => {
    setIsOpen(!isOpen);
  };

  const cartItems: CartItem[] = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$15' },
    { id: 3, name: 'Product 3', price: '$25' },
  ];

  return (
    <>
      {/* Button to toggle cart */}
      <button className={styles.openCartBtn} onClick={toggleCart}>
        Open Cart
      </button>

      {/* Cart Sidebar */}
      <div className={`${styles.cartSidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={toggleCart}>
          &times;
        </button>
        <h2>Your Cart</h2>
        <ul className={styles.cartItems}>
          {cartItems.map((item: CartItem) => (
            <li key={item.id} className={styles.cartItem}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <button className={styles.checkoutBtn} onClick={() => alert('Proceeding to checkout!')}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartSidebar;
