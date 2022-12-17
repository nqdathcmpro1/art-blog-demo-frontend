import React from 'react'

import useStyles from './styles'

const Tabs = ({ isLogin, setIsLogin }) => {
    const styles = useStyles()

    const handleOpenLogin = () => {
        setIsLogin(true);
    }

    const handleOpenRegister = () => {
        setIsLogin(false);
    }


  return (
    <div className={styles.container}>
        <div className={`${styles.tab} ${styles.leftTab} ${isLogin && styles.activeTab}`} onClick={handleOpenLogin}>Login</div>
        <div className={`${styles.tab} ${styles.rightTab} ${!isLogin && styles.activeTab}`} onClick={handleOpenRegister}>Register</div>
    </div>
  )
}

export default Tabs