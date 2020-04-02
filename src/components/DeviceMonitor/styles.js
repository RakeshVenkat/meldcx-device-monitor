import styled from 'styled-components';

const _colorBackground = '#FF7043';
const _colorWhite = '#FFFFFF';
const _colorButton = '#37474F';
const _colorFooter = '#D76845';

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${_colorBackground};
    position: absolute;
`

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Boundary = styled.div`
    position: relative;
    width: ${props => props.width + 10}px;
    min-width: ${props => props.width + 10}px;
    height: ${props => props.width + 10}px;
    min-height: ${props => props.width + 10}px;
    margin-top: 12vh;
`

export const Circle = styled.span`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;    

    display: block;
    background: white;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: 0;
`

export const NoOfDevices = styled.div`
    position: absolute;
    text-align: center;
    top: ${props => props.width/2 - 50}px;
    left: ${props => props.width/2 - 30}px;
    color: ${_colorWhite};
    font-size: 70px;

    & div {
        font-size: 20px;
    }
`

export const Footer = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${_colorFooter};
    padding: 5px 0;
    display: flex;
    justify-content: center;
`

export const Button = styled.a`
    display: block;
    width: 100px;
    text-decoration: none;
    text-align: center;

    background-color: ${props => props.primary ? _colorWhite : _colorButton};
    color: ${props => props.primary? _colorButton: _colorWhite};
    text-transform: uppercase;
    border-radius: 3px;
    font-size: 13px;
    margin: 1em;
    padding: 10px 0;
    border: none;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`






