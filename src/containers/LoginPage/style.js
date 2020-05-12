import styled from "styled-components";
import { TextField } from '@material-ui/core';


export const WrapperAdress = styled.div `
    margin-bottom:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
`
export const Button = styled.button `
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color:#e8222e;
    font-size:16px;
    font-family: "Roboto";
    margin: 8px 16px;
`
export const TextFieldStyled = styled(TextField) `
    width: 328px;
    height: 56px;
    border-radius: 2px;
    margin: 8px 16px;
`
export const Text = styled.text `
  width: 296px;
  height: 18px;
  font-family: "Roboto";
  font-size: 16px;
  padding-top: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  margin-top: 10px;
  
`
export const DivTitle = styled.div`
    width: 360px;
    height: 42px;
    margin-top:80px;
    text-align: center;
`
export const Image = styled.img`
    margin-top: 88px;
    margin-left: 128px;
    width: 104px;
    height: 58px;
    object-fit: contain;
    
`;

