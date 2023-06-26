import React from 'react'
import styles from "./styles/nav.module.css"

export default function Navbar(props) {
  return (
    <div className={styles.parent}>
      <div className={styles.logo}>
        Logo
      </div>

      <div className={styles.links}>
        <h1 className={styles.link} style={props.page==="home"?{color: "#FFA8DC"}:{color: "#FFFFFF"}}><a href = "/" className="cursor-pointer no-underline">Home</a></h1>
        <h1 className={styles.link} style={props.page==="about"?{color: "#FFA8DC"}:{color: "#FFFFFF"}}><a className="cursor-pointer no-underline" href="/about">About</a></h1>
        <h1 className={styles.link} style={props.page==="features"?{color: "#FFA8DC"}:{color: "#FFFFFF"}}><a href="features" className="cursor-pointer no-underline">Features</a></h1>
        <h1 className={styles.link} style={props.page==="plans"?{color: "#FFA8DC"}:{color: "#FFFFFF"}}><a href="plans" className="cursor-pointer no-underline">Plans</a></h1>
        <h1 className={styles.link} style={props.page==="reviews"?{color: "#FFA8DC"}:{color: "#FFFFFF"}}><a href="reviews" className="cursor-pointer no-underline">Reviews</a></h1>
      </div>
    </div>
  )
}
