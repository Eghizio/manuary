import styles from "./Header.module.css";
import { HiOutlinePlus } from "react-icons/hi";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { useState } from "react";

interface Props {}

export const Header = ({}: Props) => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	const handleModalOpening = () => {
		setIsModalOpened(true);
	};

	const handleModalClose = () => {
		setIsModalOpened(false);
	};

	return (
		<div className={styles["container"]}>
			<header className={styles["header"]}>
				<h1 className={styles["title"]}>Manuary</h1>
				<button className={styles["add-set-btn"]} onClick={handleModalOpening}>
					<HiOutlinePlus size={20} />
				</button>
			</header>
			<div className={styles["spacer"]} />
			<Modal isOpen={isModalOpened} onClose={handleModalClose}>
				<Form />
			</Modal>
		</div>
	);
};
