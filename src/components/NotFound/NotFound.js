import { Button, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory()
    const getBack = () => {
        history.push('/home')
    }
    return (
        <div>
            <Typography variant='h3' align='center' sx={{fontWeight: 'bold', marginTop: 20}}>
                The Page You're Looking For Doesn't Exist!!!
                <br />
                <Button onClick={getBack} variant="contained">Get Back</Button>
            </Typography>
        </div>
    );
};

export default NotFound;