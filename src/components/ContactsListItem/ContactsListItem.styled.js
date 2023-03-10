import styled from "styled-components";

export const ListItem = styled.li`
    flex-basis: calc((100% - 40px) / 3);
    padding: ${({theme}) => theme.spacing(4)};
    border-radius: ${({theme}) => theme.spacing(1)};
    background-color: ${( {theme }) => theme.colors.light};
`

export const Text = styled.p`
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    display: flex;
    align-items: center;

    svg {
        margin-right: ${({ theme }) => theme.spacing(3)};
    }
`