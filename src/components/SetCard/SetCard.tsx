import { IoIosFitness, IoIosHeartEmpty } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { BiRun } from "react-icons/bi";
import { MdEventNote, MdEditNote } from "react-icons/md";
import styles from "./SetCard.module.css";
import { ExerciseSet } from "../../types/data";
import { parseDate } from "../../utils";
import { useState } from "react";

interface Props {
	set: ExerciseSet;
}

export const SetCard = ({ set }: Props) => {
	const { name, date, repetitions, note } = set;
	const [isNoteOpened, setIsNoteOpened] = useState(false);

	const toggleNote = () => {
		setIsNoteOpened((prev) => !prev);
	};

	return (
		<div className={styles["card"]}>
			<span className={styles["date"]}>
				<MdEventNote />
				{parseDate(date)}
			</span>
			<h3 className={styles["name"]}>{name}</h3>
			<div className={styles["card-body"]}>
				<div>
					Repetitions:{" "}
					<span className={styles["pill"]}>
						<span>x</span>
						{repetitions}
					</span>
				</div>
				<button className={styles["note-btn"]} onClick={toggleNote}>
					<MdEditNote size={18} />
				</button>
			</div>
			{isNoteOpened && <div>{note}</div>}
		</div>
	);
};
