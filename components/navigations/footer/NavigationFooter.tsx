import styles from './NavigationFooter.module.css';

export interface INavigationFooter {}

const NavigationFooter: React.FC<INavigationFooter> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itens}>
        <a href="">About</a>
        <a href="">Press</a>
        <a href="">Copyright</a>
        <a href="">Contact us</a>
        <a href="">Creators</a>
        <a href="">Advertise</a>
        <a href="">Developers</a>
      </div>
      <div className={styles.itens}>
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Policy & Safety</a>
        <a href="">How Youtube works</a>
        <a href="">Test new features</a>
      </div>
      <p>© 2022 Google LLC</p>
    </div>
  );
};

export default NavigationFooter;
