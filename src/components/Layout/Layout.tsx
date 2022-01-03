import { ReactNode } from "react";
import { Center } from "../Center/Center";
import styles from "./Layout.module.css";

interface Props {
	children: ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<Center>
			<main className={styles["layout"]}>{children}</main>
		</Center>
	);
};
