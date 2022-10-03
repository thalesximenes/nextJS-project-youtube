import Image from 'next/image';
import styles from './SubscriptionCard.module.css';

export interface ISubscriptionCard {
  name: string;
  img: number;
}

const SubscriptionCard: React.FC<ISubscriptionCard> = ({ name, img }) => {
  return (
    <div className={styles.container}>
      <a className={styles.menu}>
        <Image
          src={'https://i.pravatar.cc/40?img=' + img}
          alt="user__image"
          className={styles.user__image}
          width="32px"
          height="32px"
        />
        <p>{name}</p>
      </a>
    </div>
  );
};

export default SubscriptionCard;
