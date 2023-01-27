import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { getPatientByDni } from '../Redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

export default function PatientInformation(props) {

    const dispatch = useDispatch();
    console.log(props.match.params.dni)
    useEffect(
        () => {
            dispatch(getPatientByDni(props.match.params.dni))
        }, [dispatch]
    )

    const patient = useSelector(state => (state.patientInformation));
    console.log(patient)

    // function handleClick(element) {
    //     element.preventDefault();
    //     dispatch(getPatientByDni(props.match.params.dni));
    // }


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
                <Typography variant='h4'>Patient information</Typography>
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
                item>
                <Button
                    variant="outlined"
                    startIcon={<FeaturedPlayListIcon />}
                    href='/patientlist'>
                    Patient list
                </Button>
            </Grid>

            <Grid
                item
            >
                {patient.dni == props.match.params.dni ?
                    <Grid
                        container
                        justifyContent='center'
                        direction='column'
                        spacing={3}            
                    >
                        <Grid
                            item
                        >
                            <Typography
                                variant='h4'
                            >
                                Name: {patient.name}
                            </Typography>
                        </Grid>

                        <Grid
                            item
                        >
                            <Typography
                                variant='h4'
                            >
                                Dni: {patient.dni}
                            </Typography>
                        </Grid>
                        {/* <Grid item>

                    <Button
                    onClick={element =>handleClick(element)}>buton</Button>
                    </Grid> */}

                    </Grid>
                    :
                    <Grid
                        item
                    >
                        Loading
                    </Grid>
                }

            </Grid>
        </Grid>
    )
}