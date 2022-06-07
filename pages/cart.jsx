import React from "react";
import styles from "../styles/Cart.module.css";

function cart() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Product</th>
						<th>Name</th>
						<th>Extra</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
					<tr className={styles.tr}>
						<td className={styles.td}></td>
					</tr>
				</table>
			</div>
			<div className={styles.right}>Right</div>
		</div>
	);
}

export default cart;
