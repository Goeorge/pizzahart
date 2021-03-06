import Head from "next/head";

import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Hart</title>
				<meta name="description" content="Pizza Shop in Nairobi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<PizzaList />
		</div>
	);
}
