import React from "react";
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard() {
	return (
		<div className={styles.container}>
			<Image src="/img/pizza.png" alt="pizza" width="500" height="500" />
			<h1 className={styles.title}>Pizza Hart</h1>
			<span className={styles.price}>$10.00</span>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit
			</p>
		</div>
	);
}

export default PizzaCard;
