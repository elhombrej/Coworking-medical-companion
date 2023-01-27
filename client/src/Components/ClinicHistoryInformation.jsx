import { Button, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { getClinicHistoryByDni, getPatientByDni } from '../Redux/Actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

export default function ClinicHistoryInformation(props) {

    const dispatch = useDispatch();
    console.log(props.match.params.dni)
    useEffect(
        () => {
            dispatch(getClinicHistoryByDni(props.match.params.dni))
        }, [dispatch]
    )

    useEffect(
        () => {
            dispatch(getPatientByDni(props.match.params.dni))
        }, [dispatch]
    )


    const patient = useSelector(state => (state.patientInformation));

    const clinicHistotyInformation = useSelector(state => (state.clinicHistoryInformation));

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
                <Typography variant='h4'>Clinic history information</Typography>
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
                <Divider />
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

                        <Grid
                            item
                        >
                            <Divider />
                        </Grid>
                        {clinicHistotyInformation && patient.dni == clinicHistotyInformation.dni?
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
                                        Objetivos: {clinicHistotyInformation.objetivos}
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                >
                                    <Typography
                                        variant='h4'
                                    >
                                        Objetivos generales: {clinicHistotyInformation.objetivosGenerales}
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                >
                                    <Typography
                                        variant='h4'
                                    >
                                        Objetivos inmediatos: {clinicHistotyInformation.objetivosInmediatos}
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                >
                                    <Typography
                                        variant='h4'
                                    >
                                        Usos de apoyo: {clinicHistotyInformation.usoDeApoyos}
                                    </Typography>
                                </Grid>
                            </Grid>
                            :
                            <Grid
                            item
                            >
                                {patient.name + ' no posee historia clinica registrada'}
                            </Grid>
                            }
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