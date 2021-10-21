import moment from "moment";
import { Color } from "../pages/api/colors";
import colorSlicer from "../utils/colorSlicer";
import styles from "./ColorCard.module.scss";

moment.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
    s: "Today",
    ss: "Today",
    m: "Today",
    mm: "Today",
    h: "Today",
    hh: "Today",
    d: "Yesterday",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

interface ColorCardProps {
  data: Color;
  animationDelay: string;
}

const ColorCard = ({ data, animationDelay }: ColorCardProps) => {
  return (
    <div className={styles.wrap} style={{ animationDelay }}>
      <div className={styles.paleete}></div>
      {colorSlicer(data.code).map((color, index) => (
        <div
          key={index}
          className={`${styles.place} ${styles[`p${index}`]}`}
          style={{ backgroundColor: color }}
        >
          <span>{color}</span>
        </div>
      ))}
      <div className={styles.utils}>
        {" "}
        <div className={styles.like}>
          <i className="xi-heart">{data.likes}</i>
        </div>
        <div className={styles.date}>{moment(data.date).fromNow(true)}</div>
      </div>
    </div>
  );
};
export default ColorCard;
