'use client'
import styles from './image-slider.module.scss';
import Image from "next/image";
import previewImage from 'public/assets/imgs/prod/image1.jpg';

interface Props {

}

const ImageSlider: React.FC<Props> = ({ }) => {
	return (
		<div className={styles.imageSlider}>
			<Image 
				className={styles.activeImage}
				src={previewImage}
				alt=""
			/>
		</div>
	);
}
 
export default ImageSlider;