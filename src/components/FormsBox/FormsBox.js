import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CurrencyConvertor from "../CurrencyConvertor";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        maxWidth: '496px',
        width: '100%',
        minHeight: '395px',
        padding: '10px 10px 0 10px',
        backgroundColor: '#e6f7ff',
        boxShadow: '0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)',
        borderRadius: '10px',
        boxSizing: 'border-box',
    },
})
const FormsBox = ({swap}) => {

    const styles = useStyles()
    return(
        <div className={styles.root}>
            <div className={styles.box} >
                <CurrencyConvertor swap={swap}/>
            </div>
        </div>
    )
}

export default FormsBox