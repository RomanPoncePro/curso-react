import { useState } from "react";

export const useFormState = (
	initialForm = { username: "", email: "", password: "" },
) => {
	const [formState, setStateForm] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setStateForm({
			...formState,
			[name]: value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setStateForm({
			...formState})
		console.log(formState)

	};

	return {
		formState,
		...formState,
		onInputChange,
		onSubmit,
	};
};