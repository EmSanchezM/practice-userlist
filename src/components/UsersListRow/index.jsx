import Loader from '../ui/Loader';

const UsersListRow = ({ loading = true }) => {
	if (loading) return <Loader />;
	return <div>Usuarios aca</div>;
};

export default UsersListRow;
