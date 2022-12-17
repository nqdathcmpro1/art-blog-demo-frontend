import { makeStyles } from '@mui/styles'

export default makeStyles({
    circle: { 
        position: 'relative',
        margin: '0 auto',
        height: '5vw',
        width: '5vw',
        borderRadius: '50%',
        border:  '10px solid',
        borderTopColor: 'black',
        borderLeftColor: 'white',
        borderBottomColor: 'black',
        borderRightColor: 'white',
        animation: `$circleLoading 1000ms infinite`
    },

    "@keyframes circleLoading": {
        to: {
            transform: "rotate(360deg)",
        }
    }
})