import React, { useState } from 'react';
import { NextPage } from "next";
import Head from 'next/head';
import { Button, Paper, Typography, Container } from '@mui/material';

const Counter: NextPage = () => {

    const [counter, setCounter] = useState<number>(0);
    return (
        <>
            <Head>
                <title> The Counter Page!</title>
            </Head>
            <Container maxWidth="lg" style={{ marginTop: '400px' }}>
                <Paper style={{ padding: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <Typography variant="h1">Super Counter</Typography>

                    <Typography style={{ padding: '5px' }}>You clicked the button {counter} times</Typography>
                    <Button onClick={() => setCounter(counter + 1)} variant="contained" fullWidth={false}> Click Me!</Button>

                </Paper>
                <div>
                    THIS IS JUST SOME <b>RAW</b> HTML

                    HERE IS SOME MORE TEXT!!!!!
                    <i>This is in italics</i>
                </div>
            </Container>


        </>
    )
}

export default Counter;