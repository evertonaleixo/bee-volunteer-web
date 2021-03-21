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


const NovaInstituicao: React.FC = () => {
  const classes = useStyles();

  const [institute, setInstitute] = React.useState({
    name: '',
    lat: '',
    lng: '',
    desc: '',
  });

  const saveinstitute = () => {
    fetch('/api/instituicao', {
      method: 'POST',
      body: JSON.stringify(institute)
    })
      .then(response => response.json())
      .then(data => {
        alert('Instituição criada com sucesso');
        setInstitute({
          'name': '',
          'lat': '',
          'lng': '',
          'desc': '',
        });
      })
      .catch(() => {
        alert('Fail to change. Problem on server.')
      });
  };


  return (<MyContainer>
    <p>Form de nova instituicao</p>
    <p>Nome da nova instituição:</p>
    <input value={institute.name} onChange={(e) => setInstitute({...institute, name: e.target.value})} ></input>

    <p>Latitude:</p>
    <input value={institute.lat} onChange={(e) => setInstitute({...institute, lat: e.target.value})} ></input>

    <p>Longitude:</p>
    <input value={institute.lng} onChange={(e) => setInstitute({...institute, lng: e.target.value})} ></input>

    <p>Descrição:</p>
    <input value={institute.desc} onChange={(e) => setInstitute({...institute, desc: e.target.value})} ></input>

    <br />

    <button className='btn btn-primary' onClick={() => saveinstitute()}>Criar</button>

  </MyContainer>);
}

export default NovaInstituicao;