import Loader from '../ui/Loader';

const UsersListRow = ({ loading }) => {
	if (loading) return <Loader />;
	return <div>Usuarios aca</div>;
};

export default UsersListRow;
