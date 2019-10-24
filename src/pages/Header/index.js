import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {apiCatraca2,apiCatraca} from '../../services';


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
    apiCatraca2.post('login.fcgi', {
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
      <div className="container">
        <header className="header">

          <strong>ABITAT</strong>
          <nav>
            <Link to="/table">TESTE</Link>

          </nav>


        </header>

      </div>
    );
  }
}
export default Home;
