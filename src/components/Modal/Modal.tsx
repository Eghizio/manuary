import { ReactNode } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./Modal.module.css";

interface Props {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
	if (!isOpen) return null;
	return (
		<>
			<div className={styles["backdrop"]} onClick={onClose} />
			<div className={styles["modal"]}>
				<header className={styles["modal-header"]}>
					<h2 className={styles["modal-title"]}>New set</h2>
					<button className={styles["modal-close-btn"]} onClick={onClose}>
						<AiFillCloseCircle color="crimson" size={20} />
					</button>
				</header>
				<div className={styles["modal-body"]}>{children}</div>
			</div>
		</>
	);
};
