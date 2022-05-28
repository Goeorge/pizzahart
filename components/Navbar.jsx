import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<Image
						src="/img/telephone.png"
						alt="call Us"
						width="34"
						height="34"
					/>
				</div>
				<div className={styles.texts}>
					<div className={styles.text}> ORDER NOW</div>
					<div className={styles.text}>+254 7234 234</div>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.list}>
					<li className={styles.listItem}>Home</li>
					<li className={styles.listItem}>product</li>
					<Image src="/img/logo.png" alt="logo" width="169" height="69" />
					<li className={styles.listItem}>Menu</li>
					<li className={styles.listItem}>Contancts</li>
				</div>
			</div>

			<div className={styles.item}>
				<div className={styles.cart}>
					<Image src="/img/cart.png" alt="logo" width="32" height="32" />
					<div className={styles.cartItems}>3</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
