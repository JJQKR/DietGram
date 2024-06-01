import styled from "styled-components";

export const Form = styled.form`
    width: 1280px;
    margin: 100px auto;
    background-color: #E7E7E7;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 1px 1px 1px gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
`;

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    width: 90%;
    height: 60px;
    background-color: #D9D9D9;
    border-radius: 10px;
    box-shadow: 3px 3px 3px gray;
`;

export const Button = styled.button`
    margin-top: 30px;
    background-color: #0084FD;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
`;

export const Span = styled.span`
    color: red;
    display: ${props => props.$display ? "none" : "block"};
`;