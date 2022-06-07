import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image src="/img/bg.png" alt="bg" layout="fill" objectFit="cover" />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>
						OH Yes, We did the Lama pizza. Well baked slice of Pizza.
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Find Our Restaurants</h1>
					<p className={styles.text}>
						16R4 Don Road #304
						<br /> Ney Yor 30422
						<br /> (602) 789-9000
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Working Hours</h1>
					<p className={styles.text}>
						MOnday - Friday:
						<br /> 11:00 AM - 10:00 PM
					</p>
					<p className={styles.text}>
						Saturday - Sunday:
						<br /> 11:00 AM - 10:00 PM
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
