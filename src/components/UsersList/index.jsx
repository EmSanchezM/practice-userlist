import UsersListRow from '../UsersListRow';
import style from './UsersList.module.css';

const UsersList = () => {
	return (
		<main className={style.wrapper}>
			<h1 className={style.title}>Listado de Usuarios</h1>
			<UsersListRow />
		</main>
	);
};

export default UsersList;
