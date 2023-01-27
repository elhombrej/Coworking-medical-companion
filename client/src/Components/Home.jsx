import React from 'react';
import { Button, Grid, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Home = () => {
    return (
        <Grid
            container
            justifyContent='center'
            direction='column'
            spacing={3}
        >
            <Grid
                item>
                <Typography variant='h4'>Home</Typography>

            </Grid>

            <Grid
                item>
                <Button
                    variant="outlined"
                    size='large'
                    startIcon={<FeaturedPlayListIcon />}
                    href='/patientlist'>
                    Patient list
                </Button>
            </Grid>

            <Grid
                item>
                <Button
                    variant="outlined"
                    size='large'
                    startIcon={<PersonAddIcon />}
                    href='/patientcreate'>
                    Register new patient
                </Button>
            </Grid>

            <Grid
                item>
                <Button
                    variant="outlined"
                    size='large'
                    startIcon={<HistoryEduIcon />}
                    href='/clinichistoryregistration'>
                    Register new clinic history
                </Button>
            </Grid>

            <Grid
                item>
                <Button
                    variant="outlined"
                    startIcon={<InfoIcon />}
                    href='/about'>
                    About
                </Button>
            </Grid>

        </Grid>
    )
}

export default Home;