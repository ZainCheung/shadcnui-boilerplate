import { useParams } from "react-router";

export function Component() {
	const { id } = useParams();
	return (
		<div>
			<h1>Id: {id}</h1>
		</div>
	);
}
