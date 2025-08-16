import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import List from "./List";
import { Icon } from "@iconify/react/dist/iconify.js";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <Logo />
        <List />
      </div>
      <div className={styles.actions}>
        <div className={styles.logout}>
          <Icon icon={"material-symbols:logout"} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
