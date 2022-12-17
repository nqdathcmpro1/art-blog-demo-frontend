import React, { useEffect } from 'react'
import useStyles from './styles'

const NotFound = () => {
    const styles = useStyles();

    useEffect(() => {
      document.title = "Not Found | ArtStudio"
    })

  return (
    <div>
        <h1 className={styles.errorCode}>404 !</h1>
        <p className={styles.errorMessage}>Sorry, we can't find anything you are looking for T_T </p>
    </div>
  )
}

export default NotFound