import styles from "./home.module.css"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar page="home"/>

      <div className={styles.content}>
          <h1 className={styles.homeHeading}>
            <span className={styles.gradient1}>WONDERLAND</span> 
            <span className={styles.headwhite}>PASS</span>
          </h1>
          <p className={styles.homePara}>
            Immerse yourself in a world where dreams come alive, adventures abound, and lifelong memories are waiting to be made. With ParkPass, get ready to unlock the full potential of your theme park visit and embark on a journey filled with excitement, wonder, and unparalleled fun.
          </p>
      </div>
      <div className={styles.images}>
        <img className={styles.image1} src="https://cdn.discordapp.com/attachments/1122590461937328290/1122891444785524908/Ticket-1.png" />
        <img className={styles.image2} src="https://media.discordapp.net/attachments/1122590461937328290/1122891445238509569/Ticket-2.png" />
      </div>
    </div>
  )
}
