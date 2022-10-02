import Image from 'next/image';
import styles from './VideoThumb.module.css';

export interface IVideoThumb {
  time: string;
}

const VideoThumb: React.FC<IVideoThumb> = ({ time }) => {
  return (
    <div className={styles.container}>
      <Image
        src="time-cat.jpg"
        alt="card__image"
        className={styles.card__image}
        width="276"
        height="155"
      />
      <div className={styles.card__body}>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default VideoThumb;
