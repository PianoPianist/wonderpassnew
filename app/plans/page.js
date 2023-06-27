import styles from "../home.module.css"
import Navbar from "@/components/Navbar"
import mainstyle from "./plans.module.css"
import doosraStyles from "../about/about.module.css"
export default function Home() {
  return (
    <div>
      <Navbar state="plans"/>

      <div className={doosraStyles.content}>
          <h1 className={doosraStyles.homeHeading}>
            <span className={styles.gradient1}>PLANS</span>
          </h1>
          <p className={mainstyle.homePara}>
          At WonderPass, we believe that visiting theme parks should be a seamless, extraordinary experience from start to finish. Our dedicated team of theme park enthusiasts is committed to redefining the way you enjoy these magical destinations. With innovation at our core, we strive to bring convenience, personalized service, and unmatched thrills to every ParkPass holder.
          </p>
      </div>
      <div className={mainstyle.images}>
        <img className={mainstyle.image1} src="https://cdn.discordapp.com/attachments/1122590461937328290/1122934986404810832/image.png" />
      </div>
    </div>
  )
}
