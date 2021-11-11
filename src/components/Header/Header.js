import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "../Logo"
import MainMenu from "../MainMenu";
import ConnectButton from "../ConnectButton/ConnectButton";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    navContainer: {
        padding:'10px 0',
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: '50px',
    }
})

const Header = ({setSwap}) => {
    const styles = useStyles()

    return (
        <Grid container className={styles.navContainer}>
            <Grid item xs={4}>
                <Logo />
            </Grid>
            <Grid item xs={4}>
                <MainMenu setSwap={setSwap}/>
            </Grid>
            <Grid item xs={4}>
                <ConnectButton />
            </Grid>
        </Grid>
    )
}

export default Header