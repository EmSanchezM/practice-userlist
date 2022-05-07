import { useUsers } from '../../lib/hooks/useUsers';
import UsersListRow from '../UsersListRow';
import style from './UsersList.module.css';

const UsersList = () => {
	const { users, error, loading } = useUsers();

	return (
		<main className={style.wrapper}>
			<h1 className={style.title}>Listado de Usuarios</h1>
			<UsersListRow users={users} error={error} loading={loading} />
		</main>
	);
};

export default UsersList;
