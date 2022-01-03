import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { SetsList } from "../components/SetsList/SetsList";
import { ExerciseSet } from "../types/data";
import { generateID } from "../utils";

const note = "One additional rep for Zyzz!";

const sets: ExerciseSet[] = [
	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 1, 13, 15) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 1, 13, 15) },
	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 1, 13, 15) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 1, 13, 15) },
	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 1, 13, 40) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 1, 14, 20) },

	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 2, 22, 20) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 2, 22, 25) },
	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 2, 22, 40) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 2, 22, 45) },
	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 2, 23, 5) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 2, 23, 10) },
	{ id: generateID(), name: "Pushups", repetitions: 10, note, date: new Date(2022, 0, 2, 23, 45) },
	{ id: generateID(), name: "Squats", repetitions: 10, note, date: new Date(2022, 0, 2, 23, 50) },
];

const Home = () => {
	return (
		<>
			<Head>
				<title>Manuary</title>
			</Head>
			<Layout>
				<Header />
				<SetsList sets={sets} />
			</Layout>
		</>
	);
};

export default Home;
