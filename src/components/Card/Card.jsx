import styles from "./Card.module.css";

function Card({
  title,
  popularity,
  poster_path,
  release_date,
})  {
  return(
    <div className={styles.card}>
      <img className={styles.card_img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Popularity: {popularity}</p>
        <p>Release: {release_date}</p>
      </div>
    </div>
  )
}

export default Card;