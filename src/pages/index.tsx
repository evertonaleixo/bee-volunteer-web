import React from 'react'
import Head from 'next/head'

import Container from '@material-ui/core/Container';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import FilledInput from '@material-ui/core/FilledInput';
import { Button } from '@material-ui/core';

import { signIn, signOut, useSession } from 'next-auth/client';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const Home: React.FC = () => {
  const classes = useStyles();


  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1 style={{alignSelf: 'center'}}>Bee Vollunteer</h1>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form method='post' action='/api/auth/callback/credentials' style={{alignSelf: 'center'}}>
                <input name='csrfToken' type='hidden' />

                <FilledInput style={{ width: '25rem', backgroundColor: '#F3F5F7' }} autoFocus={true} placeholder="Usuário" />

                <br />

                <FilledInput style={{ width: '25rem', backgroundColor: '#F3F5F7', marginTop: '1rem', marginBottom: '2rem' }} type='password' placeholder="Senha" />

                <br />

                <Button  onClick={() => signIn('credentials')}>Entrar</Button>
                <br />
                
              </form>
            </Paper>
          </Grid>

        </Grid>

      </Container>
    </>
  )
}

export default Home