import React, { Component } from 'react';
import { HomePage, GalleryPage, TestimonialPage, ContactPage } from './components'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  handleTabChange = (event, activeTab) => {
    this.setState(prevState => ({activeTab}))
  }

  render () {
    return (
      <>
        <CssBaseline/>
        <Paper className={{}}>
          <Tabs
            value={this.state.activeTab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="HOME" /> 
            <Tab label="CONTACT" />
            <Tab label="GALLERY" />
            <Tab label="TESTIMONIALS" />
          </Tabs>
        </Paper>
      </> 
    )
  }
}