import { ReactNode } from "react";
import styles from "./Column.module.css";

interface Props {
	children: ReactNode;
}

export const Column = ({ children }: Props) => <div className={styles["column"]}>{children}</div>;
