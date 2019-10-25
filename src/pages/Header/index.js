
import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import apiCatraca from '../../services';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});



class Home extends Component {
  
  constructor(props) {
    super(props);

    this.setDados = this.setDados.bind(this);
    this.setDados2 = this.setDados2.bind(this);
    
    
  }

  componentDidMount() {
    this.setDados();
    this.setDados2();
  }

  // eslint-disable-next-line class-methods-use-this
  async setDados() {
    await apiCatraca.post('login.fcgi', {
      login: 'admin',
      password: 'admin',
    }).then((res) => {
      const token = res.data.session;
      console.log(token);
      localStorage.setItem('token', token);
    });
  }
  async setDados2() {
    apiCatraca.post('login.fcgi', {
      login: 'admin',
      password: 'admin',
    }).then((res) => {
      const token = res.data.session;
      console.log(token);
      localStorage.setItem('token2', token);
    });
  }


  render() {

    
    
   
   


    return (
      
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
        <Button color="inherit"> <Link to='/login'> Login</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}
export default Home;





