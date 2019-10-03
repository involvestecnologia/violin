import styled from "styled-components";

export const StyledButton = styled.button`
    ${({ theme, block, lg, color, outline }) => `
        ${block ? `width: 100%;` : ""}
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: ${lg ? `50px` : `40px`};
        border: 0;
        border-radius: 4px;
        padding: 0 16px;
        outline: none;
        font-size: ${lg ? `1.6rem` : `1.4rem`};
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;

        ${outline ? `
            box-shadow: inset 0 0 0 2px ${theme.palette[color].regular};
            background-color: white;
            color: ${theme.palette[color].regular};

            &:hover {
                box-shadow: inset 0 0 0 2px ${theme.palette[color].regular}, 0 5px 10px rgba(0, 0, 0, 0.15);
            }
        ` : `
            background-color: ${theme.palette[color].regular};
            color: white;

            &:hover {
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
            }
        `}

        &:disabled,
        &:disabled:hover {
            background-color: ${theme.palette.system.light};
            color: ${theme.palette.default.light};
            box-shadow: none;
            cursor: default;
        }
    `}
`;