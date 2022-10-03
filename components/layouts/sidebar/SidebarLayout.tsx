import SubscriptionCard from '../../cards/subscription/SubscriptionCard';
import NavigationBotton from '../../navigations/botton/NavigationBotton';
import NavigationFooter from '../../navigations/footer/NavigationFooter';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu__header}>
        <button>
          {' '}
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1H0V0H18V1ZM18 6H0V7H18V6ZM18 12H0V13H18V12Z"
              fill="white"
            />
          </svg>
        </button>
        <div className={styles.menu__logo}>
          <svg
            width="90"
            height="20"
            viewBox="0 0 90 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 1.78814e-07 14.285 0 14.285 0C14.285 0 5.35042 1.78814e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C1.78814e-07 5.35042 0 10 0 10C0 10 1.78814e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
              fill="#FF0000"
            />
            <path
              d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
              fill="white"
            />
            <path
              d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
              fill="white"
            />
            <path
              d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
              fill="white"
            />
            <path
              d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
              fill="white"
            />
            <path
              d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
              fill="white"
            />
            <path
              d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
              fill="white"
            />
            <path
              d="M80.6091 8.0387C80.4374 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8758 5.79035 78.2079 5.79035C77.6905 5.79035 77.206 5.93616 76.7568 6.23014C76.3076 6.52412 75.9595 6.90747 75.7149 7.38489H75.6938V0.785645H72.9774V18.5608H75.3057L75.5926 17.3755H75.6538C75.8725 17.7988 76.1994 18.1304 76.6345 18.3774C77.0696 18.622 77.5541 18.7443 78.0856 18.7443C79.0381 18.7443 79.7413 18.3045 80.1905 17.4272C80.6397 16.5476 80.8654 15.1765 80.8654 13.3092V11.3266C80.8654 9.92722 80.7784 8.82892 80.6091 8.0387ZM78.0244 13.1492C78.0244 14.0617 77.9868 14.7767 77.9115 15.2941C77.8363 15.8115 77.7116 16.1808 77.5329 16.3971C77.3565 16.6158 77.1166 16.724 76.8179 16.724C76.5851 16.724 76.3711 16.6699 76.1735 16.5594C75.976 16.4512 75.8161 16.2866 75.6938 16.0702V8.96062C75.7878 8.6196 75.9525 8.34209 76.1853 8.12337C76.4158 7.90465 76.6698 7.79646 76.9402 7.79646C77.2272 7.79646 77.4482 7.90935 77.6035 8.13278C77.761 8.35855 77.8692 8.73485 77.9304 9.26636C77.9915 9.79787 78.0221 10.5528 78.0221 11.5335V13.1492H78.0244Z"
              fill="white"
            />
            <path
              d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={styles.menu__top}>
        <a className={styles.menu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 7V18H6V12H10V18H16V7L8 0L0 7Z" fill="white" />
          </svg>
          <p>Home</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.8 7.8L3.97 16.03L12.2 12.2L16.03 3.97L7.8 7.8ZM11.08 10.77C10.87 11.06 10.57 11.25 10.22 11.31C10.15 11.32 10.07 11.33 10 11.33C9.72 11.33 9.46 11.25 9.23 11.08C8.94 10.87 8.75 10.57 8.69 10.22C8.63 9.87 8.71 9.51 8.92 9.23C9.13 8.94 9.43 8.75 9.78 8.69C10.13 8.63 10.48 8.71 10.77 8.92C11.06 9.13 11.25 9.43 11.31 9.78C11.37 10.13 11.29 10.48 11.08 10.77ZM10 1C14.96 1 19 5.04 19 10C19 14.96 14.96 19 10 19C5.04 19 1 14.96 1 10C1 5.04 5.04 1 10 1ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0Z"
              fill="white"
            />
          </svg>
          <p>Explore</p>
        </a>
        <a className={styles.menu}>
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
              fill="white"
            ></path>
          </svg>
          <p>Shorts</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15V9L13 12L8 15ZM15 0H5V1H15V0ZM18 3H2V4H18V3ZM20 6H0V18H20V6ZM1 7H19V17H1V7Z"
              fill="white"
            />
          </svg>
          <p>Settings</p>
        </a>
      </div>
      <div className={styles.menu__top}>
        <a className={styles.menu}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4L14 7.5L8 11V4ZM15 17H1V3H0V18H15V17ZM18 15H3V0H18V15ZM4 14H17V1H4V14Z"
              fill="white"
            />
          </svg>
          <p>Library</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.97 14.95L9.00001 11.87V5H11V10.76L15.03 13.25L13.97 14.95ZM21 10C21 15.51 16.51 20 11 20C5.49001 20 1.00001 15.51 1.00001 10H2.00001C2.00001 14.96 6.04001 19 11 19C15.96 19 20 14.96 20 10C20 5.04 15.96 1 11 1C7.81001 1 4.92001 2.64 3.28001 5.38C3.17001 5.56 3.06001 5.75 2.97001 5.94C2.96001 5.96 2.95001 5.98 2.94001 6H7.00001V7H0.960007V1H1.96001V5.74C2.00001 5.65 2.03001 5.57 2.07001 5.49C2.18001 5.27 2.30001 5.07 2.42001 4.86C4.22001 1.86 7.51001 0 11 0C16.51 0 21 4.49 21 10Z"
              fill="white"
            />
          </svg>
          <p>History</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 5L13 9L7 13V5ZM18 0V18H0V0H18ZM17 1H1V17H17V1Z"
              fill="white"
            />
          </svg>
          <p>Your Videos</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.97 14.95L8 11.87V5H10V10.76L14.03 13.25L12.97 14.95ZM10 1C5.04 1 1 5.04 1 10C1 14.96 5.04 19 10 19C14.96 19 19 14.96 19 10C19 5.04 14.96 1 10 1ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0Z"
              fill="white"
            />
          </svg>
          <p>Watch Later</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z"
              fill="white"
            />
          </svg>
          <p>Liked Videos</p>
        </a>
      </div>
      <div className={styles.menu__top}>
        <p>SUBSCRIPTIONS</p>
        <SubscriptionCard {...{ name: 'Thales', img: 1 }} />
        <SubscriptionCard {...{ name: 'Guilherme', img: 2 }} />
        <SubscriptionCard {...{ name: 'Viniccius13', img: 3 }} />
        <SubscriptionCard {...{ name: 'Roberto', img: 4 }} />
        <SubscriptionCard {...{ name: 'Fernando', img: 5 }} />
        <SubscriptionCard {...{ name: 'Anna', img: 6 }} />
        <SubscriptionCard {...{ name: 'Ferdinando', img: 7 }} />
      </div>
      <div className={styles.menu__top}>
        <p>MORE FROM YOUTUBE</p>
        <a className={styles.menu}>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4.35L13 7L8 9.65V4.35ZM10 1C7.47424 0.950847 4.94811 1.07782 2.44 1.38C2.18722 1.4509 1.95693 1.58564 1.77129 1.77129C1.58565 1.95693 1.4509 2.18722 1.38 2.44C1.11211 3.94492 0.984896 5.4715 1 7C0.984896 8.5285 1.11211 10.0551 1.38 11.56C1.4509 11.8128 1.58565 12.0431 1.77129 12.2287C1.95693 12.4144 2.18722 12.5491 2.44 12.62C4.94811 12.9222 7.47424 13.0492 10 13C12.5258 13.0492 15.0519 12.9222 17.56 12.62C17.8128 12.5491 18.0431 12.4144 18.2287 12.2287C18.4144 12.0431 18.5491 11.8128 18.62 11.56C18.8879 10.0551 19.0151 8.5285 19 7C19.0151 5.4715 18.8879 3.94492 18.62 2.44C18.5491 2.18722 18.4144 1.95693 18.2287 1.77129C18.0431 1.58564 17.8128 1.4509 17.56 1.38C15.0519 1.07782 12.5258 0.950847 10 1ZM10 0C10 0 16.25 8.9407e-08 17.81 0.42C18.2341 0.534356 18.6208 0.758008 18.9314 1.06861C19.242 1.37921 19.4656 1.76589 19.58 2.19C19.8696 3.77673 20.0103 5.38708 20 7C20.0103 8.61292 19.8696 10.2233 19.58 11.81C19.4656 12.2341 19.242 12.6208 18.9314 12.9314C18.6208 13.242 18.2341 13.4656 17.81 13.58C16.25 14 10 14 10 14C10 14 3.75 14 2.19 13.58C1.76589 13.4656 1.37922 13.242 1.06861 12.9314C0.758012 12.6208 0.53436 12.2341 0.420004 11.81C0.130362 10.2233 -0.0102501 8.61292 3.98082e-06 7C-0.0102501 5.38708 0.130362 3.77673 0.420004 2.19C0.53436 1.76589 0.758012 1.37921 1.06861 1.06861C1.37922 0.758008 1.76589 0.534356 2.19 0.42C3.75 8.9407e-08 10 0 10 0Z"
              fill="white"
            />
          </svg>
          <p>Youtube Premium</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8H6V10H4V8H2V6H4V4H6V6H8V8ZM15 8.5C15 7.67 14.33 7 13.5 7C12.67 7 12 7.67 12 8.5C12 9.33 12.67 10 13.5 10C14.33 10 15 9.33 15 8.5ZM18 5.5C18 4.67 17.33 4 16.5 4C15.67 4 15 4.67 15 5.5C15 6.33 15.67 7 16.5 7C17.33 7 18 6.33 18 5.5ZM14.97 1.15L10.47 3.68L9.98 3.95L9.49 3.68L4.99 1.15L1 3.39V9.82L9.98 14.86L18.96 9.82V3.39L14.97 1.15ZM14.97 0L19.96 2.8V10.4L9.98 16L0 10.4V2.8L4.99 0L9.98 2.8L14.97 0Z"
              fill="white"
            />
          </svg>
          <p>Gaming</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 7.99998C12 9.09998 11.1 9.99998 10 9.99998C8.9 9.99998 8 9.09998 8 7.99998C8 6.89998 8.9 5.99998 10 5.99998C11.1 5.99998 12 6.89998 12 7.99998ZM6.48 4.44998L5.77 3.74998C4.68 4.82998 4 6.33998 4 7.99998C4 9.65998 4.68 11.17 5.77 12.25L6.48 11.54C5.57 10.64 5 9.38998 5 7.99998C5 6.60998 5.57 5.35998 6.48 4.44998ZM14.23 3.74998L13.52 4.45998C14.43 5.35998 15 6.60998 15 7.99998C15 9.38998 14.43 10.64 13.52 11.55L14.23 12.26C15.32 11.17 16 9.65998 16 7.99998C16 6.33998 15.32 4.82998 14.23 3.74998ZM3.65 1.62998L2.95 0.919983C1.13 2.72998 0 5.23998 0 7.99998C0 10.76 1.13 13.27 2.95 15.08L3.66 14.37C2.02 12.74 1 10.49 1 7.99998C1 5.50998 2.02 3.25998 3.65 1.62998ZM17.05 0.919983L16.34 1.62998C17.98 3.25998 19 5.50998 19 7.99998C19 10.49 17.98 12.74 16.35 14.37L17.06 15.08C18.87 13.27 20 10.76 20 7.99998C20 5.23998 18.87 2.72998 17.05 0.919983Z"
              fill="white"
            />
          </svg>
          <p>Live</p>
        </a>
        <a className={styles.menu}>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1V3V4V8V8.51L12.99 8.97C12.94 11.1 11.66 12.94 9.74 13.67H9.72L9.66 13.69L9 13.95V14.65V17V18H10V19H11H6V18H7V17V14.65V13.95L6.34 13.71L6.26 13.68H6.25C4.33 12.95 3.05 11.11 3 8.98V8.51V8V4V3V1H13ZM14 0H2V3H0V4V8V9H2.01C2.07 11.53 3.63 13.78 5.97 14.64C5.98 14.64 5.99 14.64 6 14.65V17H5V18H4V20H12V18H11V17H10V14.65C10.01 14.65 10.02 14.65 10.03 14.64C12.36 13.78 13.93 11.54 13.99 9H16V8V4V3H14V0ZM14 8V4H15V8H14ZM1 8V4H2V8H1Z"
              fill="white"
            />
          </svg>
          <p>Sports</p>
        </a>
      </div>
      <NavigationBotton />
      <NavigationFooter />
    </div>
  );
};

export default SidebarLayout;