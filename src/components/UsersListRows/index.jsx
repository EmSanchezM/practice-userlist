import Loader from '../ui/Loader';
import UserRow from '../UserRow';

const UsersListRows = ({ users, loading, error }) => {
	if (loading) return <Loader />;
	if (error) return <p>Error al cargar usuarios</p>;
	if (!users.length) return <p>No hay usuarios</p>;

	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersListRows;
