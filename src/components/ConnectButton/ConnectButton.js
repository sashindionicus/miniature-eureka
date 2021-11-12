import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    box:{
        display: 'flex',
        justifyContent: 'flex-end'

    },
    button: {
        display: 'block !important',
        width: '207px !important',
        maxWidth: '207px !important',
        minWidth: '207px !important',
        height: '40px !important',
        background: '#e6f7ff !important',
        color: 'black !important',
        textTransform: 'none !important',
        borderRadius: '10px !important',
        fontFamily: '"IBM Plex Mono", monospace !important',
        fontSize: '0.875rem !important',
        fontWeight: '500 !important',
        lineHeight: '1.75 !important',
    },
})

const ConnectButton = () => {
    const styles = useStyles()

    return (
        <div className={styles.box}>
            <Button className={styles.button} >
                Connect Wallet
            </Button>
        </div>
    )
}

export default ConnectButton