import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

function Featured() {
	const [index, setIndex] = useState(0);
	const images = [
		"/img/featured2.png",
		"/img/featured.png",
		"/img/featured3.png",
	];

	const handleArrow = (direction) => {
		if (direction === "l") {
			setIndex(index !== 0 ? index - 1 : images.length - 1);
		}
		if (direction === "r") {
			setIndex(index !== images.length - 1 ? index + 1 : 0);
		}
	};
	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow("l")}
			>
				<Image src="/img/arrowl.png" alt="arrow" layout="fill" />
			</div>
			<div
				className={styles.wrapper}
				style={{ transform: ` translateX(${-100 * index}vw)` }}
			>
				{images.map((img, i) => (
					<div className={styles.imgContainer} key={i}>
						<Image src={img} alt="featured" layout="fill" />
					</div>
				))}
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow("r")}
			>
				<Image src="/img/arrowr.png" alt="arrow" layout="fill" />
			</div>
		</div>
	);
}

export default Featured;
