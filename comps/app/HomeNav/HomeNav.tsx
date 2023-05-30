"use client"
import Link from 'next/link';
import MultiLingualContent from 'comps/utils/Text';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

const HomeNav: React.FC = () => {
	const router = useRouter();

	return (
		<nav className={styles.homeNav}>
			<ul className={styles.ul}>
				<li className={styles.link}>
					<span>
						<Link href="https://www.youtube.com/watch?v=e3KmM2JxRrg" target="_blank">
							Red Spring 2022
						</Link>
					</span>
				</li>
				<li className={styles.link}>
					<span>
						<MultiLingualContent contentID="menuVidsBtn"/>
					</span>
				</li>
				{/* onClick={() => router.push('shop')} */}
				<li className={styles.link} onClick={() => router.push('shop')}>
					<span>
						<MultiLingualContent contentID="menuStoreBtn"/>
					</span>
				</li>
			</ul>
		</nav>
	);
}
 
export default HomeNav;