import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Header, Grid, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const navigate = useNavigate()
  
  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: ''
  })
  
  const [selectedFile, setSelectedFile] = useState('');

  async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append('photo', selectedFile);
    for (let fieldName in state){
      formData.append(fieldName, state[fieldName])
    }
    try {
      await userService.signup(state) 
      props.handleSignUpOrLogin();
      navigate('/')

    } catch(err){
      console.log(err.message);
      setError(err.message)
    }

  }

  function handleChange(e){
    setState({
      ...state, 
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }


  return (
    <Grid className="cool" textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="#6f00ff" textAlign="center">
        <Image src="https://t3.ftcdn.net/jpg/04/54/66/12/360_F_454661277_NtQYM8oJq2wOzY1X9Y81FlFa06DVipVD.jpg" /> musicMAKES
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" color="orange" className="btn">Sign Up</Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}


