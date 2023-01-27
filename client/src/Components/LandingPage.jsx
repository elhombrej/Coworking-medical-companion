import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';

const LandingPage = () => {
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
                <Typography variant='h4'>Landing Page</Typography>
            </Grid>
            <Grid
                item
            >
                <Button
                    variant="contained"
                    startIcon={<LoginIcon />}
                    href='/home'>
                    Login
                </Button>
            </Grid>
        </Grid>
    )
}

export default LandingPage;