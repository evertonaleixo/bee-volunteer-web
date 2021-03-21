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


const NovaCategoria: React.FC = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const saveCategory = () => {
    fetch('/api/categorias', {
      method: 'POST',
      body: JSON.stringify({'name': category.trim(), '_id': category.trim()})
    })
      .then(response => response.json())
      .then(data => {
        alert('Categoria criada com sucesso');
        setCategory('');
      })
      .catch(() => {
        alert('Fail to change. Problem on server.')
      });
  };

  return (<MyContainer>
    <p>Nome da nova categoria:</p>
    <input value={category} onChange={(e) => setCategory(e.target.value)} ></input>

    <button className='btn btn-primary' onClick={() => saveCategory()}>Criar</button>
  </MyContainer>);
}

export default NovaCategoria;