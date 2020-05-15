import styled from "styled-components"
import TextField from '@material-ui/core/TextField';

export const Input =  styled(TextField)`
    width: 328px;
    /* height:56px; */
    border-radius: 2px;
    margin: 8px 16px;
    gap: 8px;
`
export const Div = styled.div`

    margin-bottom:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
`
export const Button = styled.button`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color:#e8222e;
    margin:0 14px;
`
export const Image = styled.img`
    text-align:center;
    width: 104px;
    height: 58px;
    object-fit: contain;
    margin: 30px auto 10px auto;
    
`;
export const Text = styled.text `

  width: 296px;
  height: 18px;
  margin-top:80px;
  font-family: "Roboto";
  font-size: 16px;
  padding: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;

`
export const DivTitle = styled.div`
    width: 360px;
    height: 42px;
    margin-top:30px;
    text-align: center;

`