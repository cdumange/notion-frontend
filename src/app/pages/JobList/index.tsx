import { useEffect, useState } from "react";
import Status, { Property } from "../../components/Status";

export const getData = async (): Promise<Property> => {
	await fetch("https://google.ca");
	return { Value: "test" };
};

const JobList = async () => {
	const prop = await getData();
	return <Status id="todo" prop={prop} />;
};

export default JobList;
