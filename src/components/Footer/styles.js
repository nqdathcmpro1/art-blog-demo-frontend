import { makeStyles } from '@mui/styles'

export default makeStyles({
    container: { 
       

        width: '100%',
        height: '100px',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'black',
        color: 'white',

        '@media only screen and (max-width:700px)' : {
            fontSize: '10px'
        }
    },

    
})