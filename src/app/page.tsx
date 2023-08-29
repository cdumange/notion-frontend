import Menu from "./components/Menu";
import UserBox from "./components/UserBox";
import JobList from "./pages/JobList";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-row items-start justify-between p-24">
			<Menu></Menu>
			<JobList />
			<UserBox user={{ email: "anemail@gmail.com", id: "!@##$" }}></UserBox>
		</main>
	);
}
