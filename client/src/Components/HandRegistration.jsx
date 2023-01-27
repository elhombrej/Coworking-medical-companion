import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';
import { postPatient } from '../Redux/Actions/Actions';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


const HandRegistration = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const [input, setInput] = useState({
        name: "",
        dni: "",
    })

    function handleChange(element) {

        setInput({
            ...input,
            [element.target.id]: element.target.value
        })
    }

    function handleSubmit(element) {
        try {
            element.preventDefault();
            dispatch(postPatient(input))
            setInput({
                name: "",
                dni: "",
            })
            console.log(input)
        } catch (error) { alert("Fatal Error.") }
        history.push('/home');
    }


    return (
        <Grid
            container
            justifyContent='center'
            direction='column'
            spacing={3}
        >
            <Grid
                item
            >
                <Typography variant='h4'>Hand registration</Typography>
            </Grid>
            <Grid
                item
            >
                <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    href='/home'>
                    Home
                </Button>

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.name).toLowerCase()}
                    id='side'
                    label="Side"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.dni)}
                    id='metacarpofalangica'
                    label="Metacarpofalangica"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.dni)}
                    id='interfalangicaProximal'
                    label="Interfalangica proximal"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.dni)}
                    id='interfalangicaDistal'
                    label="Interfalangica distal"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.dni)}
                    id='distanciaPlieguePalmarDistal'
                    label="Distancia pliegue palmar distal"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.dni)}
                    id='oposicion'
                    label="Oposicion"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <Button
                    variant="contained"
                    startIcon={<CheckIcon />}
                    types='submit'
                    onClick={(element) => handleSubmit(element)}
                >
                    Save
                </Button>
            </Grid>


        </Grid>
    )
}

export default HandRegistration;