import Image from 'next/image';
import VideoThumb from '../video-thumbs/VideoThumb';
import { mockVideoThumbProps } from '../video-thumbs/VideoThumb.mocks';
import styles from './VideoCard.module.css';

export interface IVideoCard {
  chanel: string;
  time: string;
  description: string;
}

const VideoCard: React.FC<IVideoCard> = ({ description, time, chanel }) => {
  return (
    <a className={styles.container}>
      <div className={styles.thumb}>
        <VideoThumb {...mockVideoThumbProps.base} />
      </div>
      <div className={styles.thumbnail}>
        <div className={styles.avatar}>
          <Image
            src="https://i.pravatar.cc/40?img=3"
            alt="user__image"
            className={styles.user__image}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <p>{description}</p>
          </div>
          <div className={styles.info}>
            <p>{chanel}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
