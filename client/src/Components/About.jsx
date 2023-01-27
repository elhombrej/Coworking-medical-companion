import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const About = () => {
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
                <Typography variant='h4'>About</Typography>
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
                <Typography
                variant='h4'
                >
                    Project "Coworking Medical Companion" developed by joaquinpadron@outlook.com Web version 2022
                </Typography>
            </Grid>
        </Grid>
    )
}

export default About;
