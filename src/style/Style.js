import styled from 'styled-components';

export const StyledContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #eee;

    .container {
        margin: 30px 50px;
        padding: 20px 30px;
        border: 1px solid #eaeaea;
    }

    .code-cell {
        border: 1px solid #eaeaea;
        width: 30%;
    }
`

export const StyledRecipe = styled.div`
    display: flex;
    width: 10%;
    flex-direction: column;
    align-items: flex-start;
    background: #eaeaea;
    text-align: center;

    .ingredient {
        padding: 8px 15px 10px 15px;
        margin-bottom: 10px;
        border-radius: 15px;
    }
`

export const StyledCreatureContainer = styled.div`
    .feedback {
        padding: 10px;
        background: #eaeaea;
        display: block;
    }
`