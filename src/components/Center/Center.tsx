import { ReactNode } from "react";
import styles from "./Center.module.css";

interface Props {
	children: ReactNode;
}

export const Center = ({ children }: Props) => <div className={styles["center"]}>{children}</div>;
