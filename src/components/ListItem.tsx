import styles from "./ListItem.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  item: {
    label: string;
    icon: string;
  };
  active:boolean;
};
function ListItem(props:Props) {
    const item= props.item
    console.log(props.active);
    // console.log(props)
  return (
    <div>
      <div className={`${styles.item} ${props.active ? styles.active : ""}`}>
        <Icon icon={item.icon} />
        <li>{item.label}</li> 
      </div>
    </div>
  );
}

export default ListItem;
