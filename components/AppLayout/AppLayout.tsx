import { ReactNode } from "react";
import styles from "./AppLayout.module.scss";

interface MainLayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.menu_wrap}>
          <div className={styles.logo}>
            <img src="images/logo.png" alt="logo" />
            Color Hunt
          </div>
          <i className="xi-ellipsis-h" />
        </div>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default AppLayout;
