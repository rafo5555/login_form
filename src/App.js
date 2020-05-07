import React from "react";
import "./App.css";
import { withStyles } from '@material-ui/core/styles';
import{ Card, CardHeader, CardContent, CardActions, Button, TextField, Container } from '@material-ui/core';

const styles = (theme) => {
	console.error(theme)
	return {
		wrapperDiv: {
		//   display: 'flex',
		//   justifyContent: 'center',
		maxWidth: '450px'
		},
		root: {
		  minWidth: '400px',
		  marginTop: '50px',
		},
		header: {
		  textAlign: 'center'
		},
		actions: {
		  padding: '16px'
		}
	  }
};


class App extends React.Component {

  state = {
    email: '',
    password: '',
    emailFieldError: false,
    passwordFieldError: false
  }

  handleChange = (e) => {
    this.setState({
		[e.target.name]: e.target.value
	});
  }

  handleSubmit = (e) => {
	e.preventDefault();
	if(this.state.email.length > 7 && this.state.password.length > 7){
		alert('fine!');
	}
    this.setState({
		emailFieldError: this.state.email.length < 8,
		passwordFieldError: this.state.password.length < 8,
		emailErrorText: this.state.email.length < 8  ? 'Email should contain at least 8 characters' : '',
		passwordErrorText:  this.state.password.length < 8 ? 'Password should contain at least 8 characters' : ''
	});
	
  }
  
  render() {
    const {classes} = this.props;
    const isDisabled = this.state.email.length > 1 && this.state.password.length > 1 ? false : true;
    
    return (
        <Container className={classes.wrapperDiv}>
          <Card className={classes.root}>
            <form onSubmit={this.handleSubmit}>
              <CardHeader title="Log in" className={classes.header}></CardHeader>
              <CardContent>
                <TextField
                  error={this.state.emailFieldError}
                  helperText={this.state.emailErrorText}
                  placeholder="Username"
                  fullWidth
                  type="email"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <TextField
                  error={this.state.passwordFieldError}
                  helperText={this.state.passwordErrorText}
                  placeholder="Password"
                  fullWidth
                  type="password"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />   
              </CardContent>
            	<CardActions className={classes.actions}>
                <Button fullWidth disabled={isDisabled} variant="contained" color="secondary" size="large" type="submit">
                  Sign in
                </Button>
              </CardActions>
            </form>
          </Card>       
        </Container>
    );
  }
}

export default withStyles(styles)(App);
