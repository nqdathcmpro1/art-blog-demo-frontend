import React from 'react'
import { Link } from "react-router-dom";

import useStyles from './styles'
import logo from "../../../public/logo-art.png";

const Logo = () => {
    const styles = useStyles()

  return (
    <div title="Home" className={styles.menuLogo}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt={logo} />
        </Link>
      </div>
  )
}

export default Logo