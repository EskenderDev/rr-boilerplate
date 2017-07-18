import { Route } from 'react-router-dom';
import React from 'react';
import Header from '../../components/header';
import Home from '../home';
import Features from '../features';
import styles from './styles.css';

const Root = () => (
  <div className={styles.root}>
    <Header />

    <div className={styles.content}>
      <Route path="/" exact component={Home} />
      <Route path="/features" component={Features} />
    </div>
  </div>
);

export default Root;
