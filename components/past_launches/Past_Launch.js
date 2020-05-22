import styles from "../../scss/launches.module.scss";
import Link from "next/link";

export default function Past_Launch({
  launch: { flight_number, mission_name, launch_year },
}) {
  return (
    <Link as={`/launches/${flight_number}`} href={"/launches/[flight_number]"}>
      <div className={styles.flightCard}>
        <p>{flight_number}</p>
        <h4>Mission: {mission_name}</h4>
        <h4>{launch_year}</h4>
      </div>
    </Link>
  );
}
