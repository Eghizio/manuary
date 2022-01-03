import styles from "./SetsList.module.css";
import { Column } from "../Column/Column";
import { SetCard } from "../SetCard/SetCard";
import { ExerciseSet } from "../../types/data";

interface Props {
	sets: ExerciseSet[];
}

// add day split
export const SetsList = ({ sets }: Props) => {
	return (
		<Column>
			<ul className={styles["list"]}>
				{sets.map((set) => (
					<li key={set.id} className={styles["list-item"]}>
						<SetCard set={set} />
					</li>
				))}
			</ul>
		</Column>
	);
};
