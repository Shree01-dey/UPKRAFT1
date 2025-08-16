import styles from "./List.module.css";
import { Icon } from "@iconify/react";
import ListItem from "./ListItem";

const items = [
  {
    label: "Home",
    icon: "material-symbols:dashboard-2-rounded",
  },
  {
    label: "My Students",
    icon: "ph:student-light",
  },
  {
    label: "My Courses",
    icon: "mdi:arrange-send-backward",
  },
  {
    label: "Calendar",
    icon: "solar:calendar-linear",
  },
  {
    label: "Assignment",
    icon: "material-symbols:assignment-outline-sharp",
  },
  {
    label: "Music Library",
    icon: "streamline:music-folder-song-solid",
  },
  {
    label: "Payment Summary",
    icon: "tabler:music",
  },
  {
    label: "Refer & Earn",
    icon: "carbon:data-refinery-reference",
  },
  {
    label: "Settings",
    icon: "material-symbols:settings-outline",
  },

];
function List() {
  return (
    <div>
      <ul className={styles.list}>
        {/* <li>{data[0].label}</li> */}
        {items.map(function (item,index) {          
          return (
            <ListItem item={item} active={index===0}/>
          )
        })}
      </ul>
    </div>
  );
}

export default List;
