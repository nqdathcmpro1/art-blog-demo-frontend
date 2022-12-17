import { makeStyles } from '@mui/styles';

export default makeStyles({
    arrowScrollTop: { 
        position: 'fixed',
        bottom: '5vh',
        right: '2vw', 
        cursor: 'pointer',
        border: '1px solid #000',
        borderRadius: '50px',
        transform: 'scale(1.5)', 
        backgroundColor: 'white',
        zIndex:'9'
    }
})