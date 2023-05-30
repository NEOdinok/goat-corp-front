"use client"
import cn from 'classnames';
import styles from './menu-drawer.module.scss';
import Link from 'next/link';
import LangSwitch from 'comps/app/LangSwitch/LangSwitch';
import menuDrawerStore from 'stores/UIStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { observer } from 'mobx-react-lite';
import MultiLingualContent from 'comps/utils/Text';
import { useEffect } from 'react';

// observer
const MenuDrawer = () => {
	// useEffect(() => {
	// 	const html = document.querySelector("html"); 

	// 	if (menuDrawerStore.isMenuDrawerOpen) (html as HTMLElement).classList.add("overflowHidden");
	// 	if (!menuDrawerStore.isMenuDrawerOpen) (html as HTMLElement).classList.remove("overflowHidden");
	// }, [menuDrawerStore.isMenuDrawerOpen]);

	return (
		<div className={cn(
			styles.menuDrawer,
			menuDrawerStore.isMenuDrawerOpen? styles.menuDrawerOpen: styles.menuDrawerClosed,
		)}>
			<div className={styles.drawerContent}>
				<div className={styles.drawerLinks}>
					<Link
						href="/"
						className={styles.drawerLink}
					>
						<span>
							<MultiLingualContent contentID="home"/>
						</span>
					</Link>
					<Link
						href="/"
						className={styles.drawerLink}
					>
						<span>
							<MultiLingualContent contentID="store"/>
						</span>
					</Link>
					<Link
						href="/"
						className={styles.drawerLink}
					>
						<span>
							<MultiLingualContent contentID="videos"/>
						</span>
					</Link>
				</div>
				<LangSwitch orient="col"/>
				<FontAwesomeIcon
					className={styles.closeIcon}
					icon={faTimes}
					// onClick={() => menuDrawerStore.toggleMenuDrawerOpen(false)}
				/>
			</div>
		</div>
	);
}
 
export default MenuDrawer;