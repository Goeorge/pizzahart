import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Best Pizza in Town</h1>

			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, velit
				voluptatem maxime id eveniet quo illo, nam, enim aperiam illum itaque ab
				quae consequatur facilis saepe quidem neque sint! Quam.
			</p>
			<div className={styles.wrapper}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	);
}

export default PizzaList;
