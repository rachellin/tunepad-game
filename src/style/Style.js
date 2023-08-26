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

    .code-container {
        width: 100%;
    }

    .code-cell {
        border: 1px solid #eaeaea;
        height: 300px;
        margin-bottom: 20px;
    }

    .tunepad-cell {
        border: none;
        width: 100%;
        height: 700px;
    }

    .submit {
        border: none;
        border-radius: 10px;
        padding: 8px;
        background: #eaeaea;
        display: block;
        text-transform: uppercase;
        float: right;
        font-size: 14px;
    }

    .help {
        display: fixed;
        bottom: 5px;
        left: 5px;
    }
`

export const StyledRecipe = styled.div`
    width: 14%;

    .ingredient-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 30px;
        background: #eaeaea;
        text-align: center;
    }

    .ingredient {
        display: inline-block;
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

    h2 {
        padding: 15px 25px;
        border-radius: 50px;
        background: #eaeaea;
    }
`