import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import logo from'../../assets/logo.png'

const useStyles = makeStyles({
    image: {
        margin: '-70px 0 -70px 0'
    }
})

const Logo = () => {
    const styles = useStyles()

    return (
        <img alt="logo" className={styles.image} src={logo} />
    )
}

export default Logo