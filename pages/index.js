import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Hart</title>
				<meta name="description" content="Pizza Shop in Nairobi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			Homepage
			<Image src="./images/pizza.jpg" alt="Pizza" width={400} height={400} />
		</div>
	);
}
