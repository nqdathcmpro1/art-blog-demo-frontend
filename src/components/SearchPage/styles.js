import { makeStyles } from "@mui/styles"

export default makeStyles({
    container: {
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
                

    },

    searchResult: {
        width: "90%",
        height: "100%",

        fontSize: "30px",
        fontWeight: "bold"
    },

    "@media only screen and (max-width: 500px)": {
        searchResult: {
            textAlign: "center",
            fontSize: "6vw"
        }
    }

})
