import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function MUI() {
    return (
        <>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        width: 600,
                        height: 200,
                        backgroundColor: 'red',
                        '&:hover': {
                            backgroundColor: 'black',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <Box 
                    sx={{
                        marginTop:'50px'
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Required Test"
                        defaultValue="Hello World Test"
                    />
                </Box>
            </Container>
        </>
    )
}