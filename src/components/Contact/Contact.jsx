import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import styles from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, number, name }) => {
	const dispatch = useDispatch();
	const handleDelete = () => dispatch(deleteContact(id));

	return (
		<li className={styles.contactItem}>
			<div>
				<div className={styles.contactContext}>
					<IoIosContact />
					<span>{name}</span>
				</div>
				<div className={styles.contactContext}>
					<MdPhoneInTalk />
					<a href={`tel: ` + number}>{number}</a>
				</div>
			</div>
			<button onClick={handleDelete} type='button' aria-label='delete button'>
				Delete
			</button>
		</li>
	);
};

export default Contact;
