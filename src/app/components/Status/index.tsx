"use client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Context, useEffect, useState } from "react";

export type Property = {
	Value: string;
};

type Props = {
	id: string;
	prop?: Property;
};

function Status({ prop }: Props) {
	const [v, setV] = useState(prop);

	useEffect(() => {
		fetch("https://google.ca")
			.catch((err) => console.log(err))
			.finally(() => setV({ Value: "done" }));
	}, []);
	return (
		<div className="rounded-full bg-slate-400 pl-3 pr-3 pt-1 pb-1">
			Status : {v?.Value}
		</div>
	);
}

export default Status;
