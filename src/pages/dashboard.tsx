import React from 'react'
import Head from 'next/head'
import MyContainer from '../components/my-container'

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


const Dashboard: React.FC = () => {
  const classes = useStyles();


  return (<MyContainer>
    <p>Imagens e explicações iniciais</p>
  </MyContainer>);
}

export default Dashboard;