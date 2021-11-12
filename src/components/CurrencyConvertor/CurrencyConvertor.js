import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress, Typography} from "@material-ui/core";
import InputConverter from "../InputConverter";
import ComboBox from "../ComboBox";
import OrderMenu from "../OrderMenu";



const useStyles = makeStyles({
    inputsBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '56px',
    },
    font: {
        padding: '0, 10px'
    },
    settings: {
        minHeight: '130px',
        padding: '10px',
        border: '2px solid #91d5ff',
        borderRadius: '10px',
        boxSizing: 'border-box',
        marginBottom: '10px',
    },
    settingsTitleBox: {
        marginBottom: '5px'
    },
    settingsTitle: {
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.5',
        marginBlockStart: '0em !important',
        marginBlockEnd: '0em !important',
    },
    result: {
        fontSize: '1rem'
    },
    resultBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '1rem',
        fontWeight: '400,',
        lineHeight: '1.5',
    }
})

const CurrencyConvertor = ({swap}) => {
    const styles = useStyles()

    const [from, setFrom] = useState({})
    const [to, setTo] = useState({})

    const options = [
        { title: "WETH" },
        { title: "DAI" },
        { title: "BAT" },
        { title: "USDC" },
        { title: "UNI" }
    ]
    if (swap) {
        return (
            <div>
                <Typography className={styles.font} component='h6' variant='h6'>Swap</Typography>
                <div className={styles.settings}>
                    <div className={styles.settingsTitleBox}>
                        <h3 className={styles.settingsTitle}>FROM</h3>
                    </div>
                    <div className={styles.inputsBox}>
                        <ComboBox props={options} setState={setFrom}/>
                        <InputConverter />
                    </div>
                    <p className={styles.result}>
                        <span>BALANCE ETC: {from.title}</span>
                    </p>
                </div>
                <div className={styles.settings}>
                    <div className={styles.settingsTitleBox}>
                        <h3 className={styles.settingsTitle}>T0</h3>
                    </div>
                    <div className={styles.inputsBox}>
                        <ComboBox props={options} setState={setTo}/>
                    </div>
                </div>
                <p className={styles.resultBox} >
                    <span>1 {from.title} = {to.title}</span>
                </p>
                <OrderMenu />
            </div>
        )
    } else {
        return (
            <CircularProgress />
        )
    }

}

export default CurrencyConvertor