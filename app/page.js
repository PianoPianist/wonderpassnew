"use-client"
import styles from "./home.module.css"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <link href="https://fonts.cdnfonts.com/css/mortend" rel="stylesheet" />
      <Navbar state="home" />

      <div className={styles.content}>
          <h1 className={styles.homeHeading}>
            <span className={styles.gradient1}>WONDERLAND</span> PASS
          </h1>
          <p className={styles.homePara}>
            Immerse yourself in a world where dreams come alive, adventures abound, and lifelong memories are waiting to be made. With ParkPass, get ready to unlock the full potential of your theme park visit and embark on a journey filled with excitement, wonder, and unparalleled fun.
          </p>
          <div className={styles.images}>
            <img className={styles.image3} src="https://media.discordapp.net/attachments/1122590461937328290/1123204804668309555/Group_7.png?width=324&height=473" />
            <img className={styles.image2} src="https://media.discordapp.net/attachments/1122590461937328290/1123204804362129438/Card-1.png?width=323&height=472" />
            <img className={styles.image1} src="https://media.discordapp.net/attachments/1122590461937328290/1123204804110450720/Card.png?width=324&height=473" />
          </div>
      </div>
    </div>
  )
}
