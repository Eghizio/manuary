import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { ExerciseSet } from "../../types/data";
import styles from "./Form.module.css";
// rhf yup

type FormData = Omit<ExerciseSet, "id">;

export const Form = () => {
	const { register, handleSubmit } = useForm<FormData>();
	const onSubmit = ({ name, repetitions, date, note }: FormData) => {
		console.log({ name, repetitions, date: new Date(date), note });
	};

	const currentDateTime = new Date().toISOString().slice(0, -8);

	return (
		<form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
			<fieldset className={styles["field"]}>
				<label className={styles["label"]} htmlFor="name">
					Name:
				</label>
				<input
					className={[styles["input"], styles["input-text"]].join(" ")}
					type="text"
					{...register("name")}
					placeholder="Pushups"
					required
				/>
			</fieldset>
			<fieldset className={styles["field"]}>
				<label className={styles["label"]} htmlFor="repetitions">
					Repetitions:
				</label>
				<input
					className={[styles["input"], styles["input-number"]].join(" ")}
					type="number"
					min="0"
					{...register("repetitions")}
					placeholder="10"
					required
				/>
			</fieldset>
			<fieldset className={styles["field"]}>
				<label className={styles["label"]} htmlFor="date">
					Date:
				</label>
				<input
					className={[styles["input"], styles["input-date"]].join(" ")}
					type="datetime-local"
					{...register("date")}
					defaultValue={currentDateTime}
					max={currentDateTime}
				/>
			</fieldset>
			<fieldset className={styles["field"]}>
				<label className={styles["label"]} htmlFor="note">
					Note:
				</label>
				<textarea
					className={[styles["input"], styles["input-area"]].join(" ")}
					{...register("note")}
					defaultValue="One additional rep for Zyzz!"
					placeholder="One additional rep for Zyzz!"
				/>
			</fieldset>

			<button className={styles["submit-btn"]} type="submit">
				Add
			</button>
		</form>
	);
};
