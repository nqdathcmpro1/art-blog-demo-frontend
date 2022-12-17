import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AppAutoScroll = () => {
    const location = useLocation()
    useEffect (()=> {
        window.scrollTo(0,-1)
    }, [location])

    return null
}

export default AppAutoScroll