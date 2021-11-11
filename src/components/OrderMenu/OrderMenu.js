import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {styled} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";


const useStyles = makeStyles({
    root: {
        width: '100%',
        padding: '0 10px',
        border: '2px solid #91d5ff',
        borderRadius: '10px',
        backgroundColor: '#bae7ff',
        boxSizing: 'border-box'
    },
    line: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    p: {
        marginBlockStart: '0em !important',
        marginBlockEnd: '0em !important',
    },
})

const ColorButton = styled(Button)(({ theme }) => ({
    background: '#69c0ff',
    width: '100%',
    color: theme.palette.getContrastText(blue[500]),
    '&:hover': {
        backgroundColor: blue[700],
    },
}));

const OrderMenu = () => {
    const styles = useStyles()
    const [swap, setSwap] = useState(true)

    if (swap) {
        return (
            <ColorButton onClick={() => setSwap(false)}>SWAP</ColorButton>
        )
    } else {
        return (
            <div>
                <div className={styles.root} >
                    <div className={styles.line}><p className={styles.p}>Liquidty Provider Fee</p><p className={styles.p}>0.003 ETH</p></div>
                    <div className={styles.line}><p className={styles.p}>Route</p><p className={styles.p}>ETH > USDC</p></div>
                    <div className={styles.line}><p className={styles.p}>Price inpact</p><p className={styles.p}>-0.004%</p></div>
                    <div className={styles.line}><p className={styles.p}>Minimum Recived</p><p className={styles.p}></p></div>
                    <div className={styles.line}><p className={styles.p}>Slippage Tolerance</p><p className={styles.p}>0.50%</p></div>
                </div>
                <ColorButton>APPROVE</ColorButton>
            </div>
        )
    }
}

export default OrderMenu