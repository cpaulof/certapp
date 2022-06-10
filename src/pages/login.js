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
import axios from 'axios'
import { useState } from 'react';
import { Box } from '@mui/system';

export default function Login(){
    const [password, setPassword] = useState({
        showPassword: false,
        value: ''
      })
      const [result, setResult] = useState({})
    
      function doLogin(){
        console.log('chamar api/user.js')
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
        </Stack>
      )
}