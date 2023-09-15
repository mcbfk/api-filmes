import styled from "styled-components"

export const Container = styled.div`

    iframe {
        width: 80%;
        height: 70%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    button {
        background-color: #6654DA;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #FFF;
        padding: 0.8rem 2rem;
        font-size: 100%;
        transition: all 0.3s;
        margin: 20px 0 0 20px;
    }

    button:hover {
        background-color: #5848c2;
    }
`