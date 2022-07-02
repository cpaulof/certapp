import {
    ButtonGroup,
    Button,
    InputLabel,
    OutlinedInput,
    FormControl,
    InputAdornment,
    IconButton,  
    Grid,
    Stack,
    Typography} from '@mui/material';
  
import {Visibility, VisibilityOff} from '@mui/icons-material';

import { useState } from 'react';
import { Box } from '@mui/system';
import * as User from "../api/user"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login(){
      const [password, setPassword] = useState({
        showPassword: false,
        value: ''
      })

      useEffect(()=>{
        document.title = "Login"
      }, [])
      const [email, setEmail] = useState("")
      let navigate = useNavigate()

      async function doLogin(){
        const data = await User.login(email, password.value)
        if(data.access){
          navigate("/profile")
        }
      }
    
      function getChain(){
        console.log('gettting chain')
      }
    
      function setShowPassword(){
        setPassword({...password, showPassword:!password.showPassword})
      }

      return (
        <Stack container >
        <Typography variant='h2'>Login</Typography>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="login">Login</InputLabel>
            <OutlinedInput
              id="login"
              type='text'
              label="Usuário"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="password">Senha</InputLabel>
            <OutlinedInput
              id="password"
              type={password.showPassword ? 'text' : 'password'}
              value={password.value}
              onChange={(e)=>{setPassword({...password, value:e.target.value})}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={setShowPassword}
                    edge="end"
                  >
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              />
          </FormControl>

          <Button  onClick={doLogin} variant="contained">Enviar</Button>
          <Link to="/profile" >Criar conta</Link>
        </Stack>
      )

      //teste commit v. seeniam
}