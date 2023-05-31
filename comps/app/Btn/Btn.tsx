import styles from './btn.module.scss';

interface Props {
	text: string,
}

const Btn: React.FC<Props> = ({ text }) => {
	return (
		<button className={styles.btn}>
			<span className={styles.btnText}>{ text }</span>
		</button>
	);
}
 
export default Btn;