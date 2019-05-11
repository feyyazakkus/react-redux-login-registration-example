import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Image, Message, Segment,
 Loader } from 'semantic-ui-react'

import validateInput from '../validators/login';
import { loginUser } from '../store/actions/auth';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  componentDidMount() {
    if (this.props.user.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user.isAuthenticated) {
      this.props.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        isLoading: false
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.loginUser(this.state, this.props.history);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors, email, password, isLoading } = this.state;

    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Link to='/'>
              <Image src='/assets/images/logo.png' size='tiny' centered />
            </Link>

            <Header as='h2' color='teal' textAlign='center'>
              Login
            </Header>
            <Form size='large'
              onSubmit={this.onSubmit}
              error={errors.loginError ? true : false}
              autoComplete='off'
            >
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  name='email'
                  placeholder='E-mail'
                  defaultValue={email}
                  error={errors.email ? true : false}
                  onChange={this.onChange}
                />
                <Form.Input
                  fluid icon='lock'
                  iconPosition='left'
                  name='password'
                  placeholder='Password'
                  type='password'
                  defaultValue={password}
                  error={errors.password ? true : false}
                  onChange={this.onChange}
                />

                <Message error content={errors.loginError} />

                <Button color='teal' fluid size='large' disabled={isLoading}>
                  {!isLoading
                    ? 'Login'
                    : <Loader active inverted inline size='small' />
                  }
                </Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account? <Link to='/sign-up'>Sign up!</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LoginForm)
