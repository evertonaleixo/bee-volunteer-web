import React, { Children } from 'react'
import Head from 'next/head'

import Container from '@material-ui/core/Container';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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


const MyContainer: React.FC = (props) => {
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
              <h1 style={{ alignSelf: 'center' }}>Bee Vollunteer</h1>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <List component="nav" aria-label="main mailbox folders">
                    <a href='/dashboard'>
                      <ListItem button>
                        {/* <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon> */}
                        <ListItemText primary="Bee Volunteer" />
                      </ListItem>
                    </a>
                    <a href='/instituicoes'>
                      <ListItem button>
                        {/* <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Instituiçoes" />
                      </ListItem>
                    </a>

                    <a href='/nova-instituicao'>
                      <ListItem button>
                        {/* <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Nova instituição" />
                      </ListItem>
                    </a>

                    <a href='/categorias'>
                      <ListItem button>
                        {/* <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon> */}
                        <ListItemText primary="Categorias" />
                      </ListItem>
                    </a>

                    <a href='/nova-categoria'>
                      <ListItem button>
                        {/* <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon> */}
                        <ListItemText primary="Nova categoria" />
                      </ListItem>
                    </a>
                  </List>
                </Grid>
                <Grid item xs={9}>
                  {props.children}
                </Grid>
              </Grid>
            </Paper>
          </Grid>

        </Grid>

      </Container>
    </>
  )
}

export default MyContainer;