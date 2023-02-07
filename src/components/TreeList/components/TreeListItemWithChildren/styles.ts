import styled from "styled-components"
import Button from "../../../Button"

export const TreeItemDropdown = styled.div<{
    height: number
}>`
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    height: ${({ height }) => height}px;
`

export const StyledButton = styled(Button)<{ dropdownIsOpen?: boolean }>`
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.md};

    img {
        transition: all 0.25s ease-in-out;
        transform: rotate(
            ${({ dropdownIsOpen }) => (dropdownIsOpen ? 0 : `-90deg`)}
        );
        height: 6px;
        align-self: center;
    }
`
