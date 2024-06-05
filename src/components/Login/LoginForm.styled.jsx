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
    align-items: center;
    padding: 30px;
    gap: 10px;
`;

export const InputBox = styled.div`
    width: 90%;
    height: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Input = styled.input`
    width: 100%;
    height: 60px;
    background-color: #D9D9D9;
    border-radius: 10px;
    box-shadow: 3px 3px 3px gray;
`;

export const ButtonDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 20%;
    background-color: ${props => props.$color || "#0084FD"};
    margin-top: 30px;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover{
        filter:brightness(0.8);
    };
`;

export const Span = styled.span`
    color: red;
`;


