import React, { ChangeEvent, useState } from 'react'
import * as SC from './style';
import MagnifyingGlass from '@assets/icons/MagnifyingGlass';

interface Option {
  label: string,
  value: string,
  id: string
}

interface InputSelectProps {
  data: Option[],
  width?: string
}

const InputSelect = ({ data, width = '300px' }: InputSelectProps) => {
  const [opened, setOpened] = useState<boolean>(false)
  const [options, setOptions] = useState<Option[]>(data)
  const [selected, setSelected] = useState<string>("")

  const handleClick = (e: any) => {
    setSelected(e.target.value)
    setOptions(data)
    setOpened(false)
  }

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newOptions = data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()))
    setSelected(value)
    setOptions(newOptions)
  }
  return (
    <SC.InputSelectWrapper width={width}>
      <SC.SelectedItemWrapper>
        <MagnifyingGlass width={21} color='var(--text-color)' />
        <SC.SelectedItem
          type="text"
          value={selected}
          onChange={handleFilter}
          onFocus={() => setOpened(true)}
          placeholder='María'
        />
      </SC.SelectedItemWrapper>

      <SC.List opened={opened}>
        {options.length ? (
          options.map((option) => (
            <SC.Row key={option.id}>
              <input type="radio" value={option.value} name="select-opt" id={`opt-${option.id}`} onChange={handleClick} />
              <SC.NormalLabel htmlFor={`opt-${option.id}`}>{option.label}</SC.NormalLabel>
            </SC.Row>
          ))
        ) : (
          <SC.Row>
            <input type="radio" value="" name="select-opt" id="" onChange={handleClick} />
            <SC.CenteredLabel htmlFor="" id="center-text">No hay resultados</SC.CenteredLabel>
          </SC.Row>
        )}
      </SC.List>
    </SC.InputSelectWrapper>
  )
}

export default InputSelect
