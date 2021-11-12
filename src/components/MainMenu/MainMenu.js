import React from "react";
import {Box } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

const useStyles = makeStyles({
    menu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '260px',
        width: '100%',
        height: '59px',
        border: '4px solid rgb(230, 247, 255)',
        borderRadius: '10px',
    },
    button: {
        fontFamily: '"IBM Plex Mono", monospace !important',
        background: '#e6f7ff !important',
        color: 'black !important',
        width: '100px',
    }
})

const MainMenu = ({setSwap}) => {
    const styles = useStyles()

    return(
            <Box className={styles.menu}>
                <ToggleButtonGroup >
                    <ToggleButton className={styles.button} value='left' aria-pressed='true' onClick={() => setSwap(true)}>Swap</ToggleButton>
                    <ToggleButton className={styles.button} value='right' aria-pressed='false' onClick={() => setSwap(false)}>Claim</ToggleButton>
                </ToggleButtonGroup>
            </Box>

    )
}

export default MainMenu