import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';
import { postClinicHistory } from '../Redux/Actions/Actions';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


const ClinicHistoryRegistration = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const [input, setInput] = useState({
        objetivos: "",
        dni: "",
        objetivosGenerales: "",
        objetivosInmediatos: "",
        usoDeApoyos: "",
    })

    function handleChange(element) {

        setInput({
            ...input,
            [element.target.id]: element.target.value
        })
        console.log(input)
    }

    function handleSubmit(element) {
        try {
            element.preventDefault();
            dispatch(postClinicHistory(input))
            setInput({
                objetivos: "",
                dni: "",
                objetivosGenerales: "",
                objetivosInmediatos: "",
                usoDeApoyos: "",
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
                <Typography variant='h4'>Clinic history registration</Typography>
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
                    value={(input.dni).toLowerCase()}
                    id='dni'
                    label="DNI"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.objetivos)}
                    id='objetivos'
                    label="Objetivos"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.objetivosGenerales)}
                    id='objetivosGenerales'
                    label="Objetivos generales"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.objetivosInmediatos)}
                    id='objetivosInmediatos'
                    label="Objetivos inmediatos"
                    type='text'
                    variant="outlined"
                    onChange={(element) => handleChange(element)}
                />

            </Grid>

            <Grid
                item
            >
                <TextField
                    value={(input.usoDeApoyos)}
                    id='usoDeApoyos'
                    label="Uso de apoyos"
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

export default ClinicHistoryRegistration;