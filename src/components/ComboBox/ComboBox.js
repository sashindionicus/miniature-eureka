import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox({props, setState}) {

    const handleChange = (event, newValue) => {
        setState(newValue);
    };
    return (
        <Autocomplete
            id="combo-box"
            options={props}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
            onChange={handleChange}
        />
    );
}

