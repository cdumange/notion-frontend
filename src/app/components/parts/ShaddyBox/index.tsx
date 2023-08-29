import React from "react";

type Props = {
	children: React.ReactNode;
};

const ShaddyBox = ({ children }: Props) => (
	<div className="shadow-slate-50 bg-cyan-500 p-6 rounded">{children}</div>
);

export default ShaddyBox;
