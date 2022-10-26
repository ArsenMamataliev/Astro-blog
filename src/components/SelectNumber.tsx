import React from 'react'
import Select from 'react-select'

const options = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' }
]

export default function SelectNumber(){
  return(
    <Select options={options} />
  )
  }