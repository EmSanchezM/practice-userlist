import { useFilters } from '../../lib/hooks/useFilters';
import { useUsers } from '../../lib/hooks/useUsers';
import UsersListFilters from '../UsersListFilters';
import UsersListPagination from '../UsersListPagination';
import UsersListRows from '../UsersListRows';
import style from './UsersList.module.css';

const UsersList = () => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { users, error, loading, totalPages } = useUsers(filters);

	return (
		<main className={style.wrapper}>
			<h1 className={style.title}>Listado de Usuarios</h1>
			<UsersListFilters
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={users} error={error} loading={loading} />
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			/>
		</main>
	);
};

export default UsersList;
