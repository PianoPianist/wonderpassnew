import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from "./plans.module.css"
import doosraStyles from "../about/about.module.css"
export default function Home() {
  return (
    <div>
      <Navbar state="plans"/>

      <div className={doosraStyles.content}>
          <h1 className={styles.homeHeading} style={{fontSize: "5vw"}}>
            <span className={styles.gradient1}>PLANS</span>
          </h1>
      </div>
      <div className={mainstyle.plans}>
        <div className={mainstyle.card}>
          <h1 className={mainstyle.planHeading}>SINGLE</h1>
          <p className={mainstyle.benefits}>Benefits: </p>
        </div>
        <div className={mainstyle.card}>
          <h1 className={mainstyle.planHeading}>COUPLES</h1>
        </div>
        <div className={mainstyle.card}>
          <h1 className={mainstyle.planHeading}>FAMILY</h1>
        </div>
      </div>
    </div>
  )
}
