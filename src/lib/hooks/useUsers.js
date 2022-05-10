import { useEffect, useState } from 'react';
import {
	filterUsersByActive,
	filterUsersByName,
	paginateUsers,
	sortUsers
} from './services/filterUsers';

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

const getUsersToDisplay = (
	users,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	let usersFiltered = filterUsersByActive(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const { paginatedUsers, totalPages } = paginateUsers(
		usersFiltered,
		page,
		itemsPerPage
	);

	return { paginatedUsers, totalPages };
};

export const useUsers = filters => {
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

	const { paginateUsers, totalPages } = getUsersToDisplay(users.data, filters);

	return {
		users: paginateUsers,
		totalPages,
		error: users.error,
		loading: users.loading
	};
};
