import { User } from "../../models/users";
import ShaddyBox from "../parts/ShaddyBox";

type Props = {
	user: User;
};
const UserBox = ({ user }: Props) => {
	return (
		<ShaddyBox>
			<img src="/shadow.jpeg" alt="profile picture" />
			<span>Email : {user.email}</span>
		</ShaddyBox>
	);
};

export default UserBox;
