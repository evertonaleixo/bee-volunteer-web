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


const Instituicoes: React.FC = () => {
  const classes = useStyles();
  const [instituicoes, setInstituicoes] = React.useState([]);

  React.useEffect(() => {loadInstituicoes()},[]);

  const loadInstituicoes = () => {
    fetch('/api/instituicao', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setInstituicoes(data.instituicoes);
      })
      .catch(() => {
        alert('Fail to change. Problem on server.')
      });
  };

  return (<MyContainer>
    <p>Lista de instituições</p>

    <table className='table'>
      <thead>
        <th>Nome</th>
        <th>Localizacao</th>
        <th>Descrição</th>
      </thead>
      <tbody>
        {instituicoes&& instituicoes.map((inst, idx) => <tr key={idx}>
          <td>{inst.name}</td>
          <td>({inst.lat}, {inst.lng})</td>
          <td>{inst.desc}</td>
        </tr>)}
      </tbody>
    </table>
  </MyContainer>);
}

export default Instituicoes;