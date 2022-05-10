import UserDisplay from '../UserDisplay';
import UserRole from '../UserRole';
import UserStatus from '../UserStatus';
import style from './UserRow.module.css';

const UserRow = ({ name, username, role, active }) => {
	return (
		<article className={style.wrapper}>
			<div className={style.name}>
				<UserDisplay name={name} username={username} />
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>Acciones</div>
		</article>
	);
};

export default UserRow;
