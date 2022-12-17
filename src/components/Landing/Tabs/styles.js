import { makeStyles } from "@mui/styles";

export default makeStyles({
    container: {
        width: '50%',
        height: "30px",

        display: "flex",
        justifyContent: "center",
        color: "white",
    },

    tab: {
        maxWidth: "70%",
        minWidth: "150px",
        height: "100%",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "1px solid white",
        borderRadius: "50px 50px 0 0",


        cursor: "pointer",

        zIndex: "0"
    },

    leftTab: {
        transform: "translateX(30px)",
    },

    rightTab: {
        transform: "translateX(-30px)"
    },

    activeTab: {
        backgroundColor:"white",
        color: "black",
        zIndex: "1"
    }

    
})