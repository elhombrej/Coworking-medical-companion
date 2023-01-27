import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HealingIcon from '@mui/icons-material/Healing';

const PageNotFound = () => {
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
                <Typography variant='h4'>404: Page not found</Typography>
            </Grid>
            <Grid
                item
            >

                <Button
                    variant="contained"
                    startIcon={<HealingIcon />}
                    size='large'
                    href='/'>
                    Main page
                </Button>

            </Grid>
        </Grid>
    )
}

export default PageNotFound;