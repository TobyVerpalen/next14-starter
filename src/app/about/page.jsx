import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/20433050/pexels-photo-20433050/free-photo-of-eiland-madeira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
      </div>
    </div>
  )
}

export default AboutPage