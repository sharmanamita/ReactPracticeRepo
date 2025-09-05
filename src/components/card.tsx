import styled from "styled-components";
import styles from "./netflixSeries.module.css";

export type SeriesData = {
  id: string;
  img_url: string;
  name: string;
  rating: string;
  description: string;
  genre: string[];
  cast: string[];
  watch_url: string;
};

export const Card = (props: { data: SeriesData }) => {
  const { id, img_url, name, rating, description, genre, watch_url, cast } = props.data;
  const ratingClass = `${styles.rating} ${Number(rating) >= 8.5 ? styles.green : styles.orange}`;
  // const btn_style = { // this normal way of styling
    // padding: "0.6rem 0.6rem",
    // border: "none",
    // fontSize: "1.2rem",
    // backgroundColor: Number(rating) >= 8.5 ? "var(--green)" : "var(--orange)",
    // color: "white",
    // borderRadius: "5px",
    // cursor: "pointer",
    // transition: "background 0.2s",
  // };

  // using styled components with Object syntax
  // const ButtonStyled = styled.button({
  //   padding: "0.6rem 0.6rem",
  //   border: "none",
  //   fontSize: "1.2rem",
  //   backgroundColor: Number(rating) >= 8.5 ? "var(--green)" : "var(--orange)",
  //   color: "black",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  //   transition: "background 0.2s",
  // });

  // using styled components with template literal syntax
  const ButtonStyled = styled.button`
    padding: 0.6rem 0.6rem;
    border: none;
    font-size: 1.2rem;
    background-color: ${Number(rating) >= 8.5 ? "var(--green)" : "var(--orange)"};
    color: black;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
  `
  function handleBtnClick() {
    console.log('Button clicked!');
  }

  return (
    <li key={id} className={styles["netflix-card"]}>
      <div className={styles["card-img"]}>
        <img src={img_url} alt={img_url} width={"55%"} height={"55%"}></img>
      </div>
      <div className={styles["netflix-card-content"]}>
        <h2>{name}</h2>
        <h3>
          Rating:<span className={ratingClass}>{rating}</span>
        </h3>
        <p className="italic">Summary: {description}</p>
        <p>Genere: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonStyled>Watch Now</ButtonStyled>
        </a>
        <button onClick={handleBtnClick}>More Info</button>
      </div>
    </li>
  );
};
