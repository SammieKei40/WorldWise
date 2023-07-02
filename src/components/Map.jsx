import { useNavigate, useSearchParams } from "react-router-dom"
import styles from "./Map.module.css"

export default function Map() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const lag = searchParams.get("lat");
  const lng = searchParams.get("lng")
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
        <h1>Map</h1>
        <h1>
          Position: {lag}, {lng}
        </h1>
        <button onClick={() => {
          setSearchParams({lag: 100, lng:50})
        }}>
          Change Pos
        </button>
    </div>
  )
}
