import styled, { css } from "styled-components";

interface ListProps {
  opened?: boolean
}
interface InputSelectWrapper {
  width?: string
}

export const InputSelectWrapper = styled.div<InputSelectWrapper>`
  display: inline-block;
  position: relative;
  width: ${({ width }) => width};
`
export const SelectedItemWrapper = styled.div`
  background: var(--white);
  border-radius: 4px;
  border: 1px solid #CCCCCC;
  position: relative;
  width: 100%;

  svg {
    left: 20px;
    position: absolute;
    top: 2px;
  }
`
export const SelectedItem = styled.input`
  border: none;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  outline: none;
  padding: 8px 50px;
  text-align: center;
  width: 100%;

  ::placeholder {
    color: #A8A8A8;
  }
`
export const List = styled.div<ListProps>`
  background: var(--white);
  border-radius: 6px;
  border: 1px solid #ECECEC;
  box-shadow: 0px 3px 6px #00000029;
  max-height: 0px;
  opacity: .0;
  overflow-y: auto;
  padding: 0 10px;
  position: absolute;
  transition: all .3s;
  width: 100%;
  z-index: 300;

  ::-webkit-scrollbar {
      display: none;
  }

  ${({ opened }) => opened && css`
    max-height: 350px;
    opacity: 1;
  `} 
`
export const Row = styled.div`

  input {
    display: none;
  }

  :not(:last-child) {
    border-bottom: 1px solid #00000029;
  }
`
export const NormalLabel = styled.label`
  color: var(--text-color);
  cursor: pointer;
  display: inline-block;
  padding: 8px 15px;
  text-align: center;
  width: 100%;
`
export const CenteredLabel = styled(NormalLabel)`
  text-align: center;
`
