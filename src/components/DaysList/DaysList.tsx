import { ExerciseSet } from "../../types/data";
import { Column } from "../Column/Column";
import { SetCard } from "../SetCard/SetCard";
import styles from "./DaysList.module.css";

interface Props {
	dailySets: ExerciseSet[];
}

// group days
// upon clicking, move to day SetsList view
// lists all sets summed up by name
export const DaysList = ({ dailySets }: Props) => {
	return (
		<Column>
			<ul className={styles["list"]}>
				{dailySets.map((set) => (
					<li key={set.id} className={styles["list-item"]}>
						<SetCard set={set} />
					</li>
				))}
			</ul>
		</Column>
	);
};
