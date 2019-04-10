import * as React from "react";

interface IProps {
    site: string
 }
export const Hello = ({site}: IProps) => (
	<>
		<h1>Welcome to {site}.</h1>
		<p>We are under construction</p>
	</>
);
