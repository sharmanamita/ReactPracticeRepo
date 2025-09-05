import seriesData from "../api/seriesData.json";
import { Card, type SeriesData } from "./card";
import styles from "./netflixSeries.module.css";

const NetflixSeries = () => {
  return (
    <ul className={styles.grid}>
      {seriesData.map((item: SeriesData) => {
        return <Card key={item.id} data={item}/>
      })}
    </ul>
  );
};

export default NetflixSeries;
