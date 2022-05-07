import { useEffect, useState } from 'react';

const fetchUsers = async (setData, setError, signal) => {
	try {
		const response = await fetch('http://localhost:4000/users', { signal });
		if (response.ok) {
			const data = await response.json();
			setData(data);
		} else {
			setError();
		}
	} catch (error) {
		setError();
	}
};

export const useUsers = () => {
	const [users, setUsers] = useState({
		data: [],
		error: false,
		loading: true
	});

	const setData = newData => {
		setUsers({ data: newData, loading: false, error: false });
	};

	const setError = () => setUsers({ data: [], loading: false, error: true });

	useEffect(() => {
		const controller = new AbortController();

		fetchUsers(setData, setError, controller.signal);

		return () => controller.abort();
	}, []);

	return {
		users: users.data,
		error: users.error,
		loading: users.loading
	};
};
