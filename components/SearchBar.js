import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import SearchLogo from '../public/header_logos/search.svg'
import CrossLogo from '../public/header_logos/cross.svg'

const Container = styled.div`
  height: 40px;
  width: 364px;
  background-color: #fff;
  border-radius: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SearchLogoContainer = styled.div`
  height: 24px;
  width: 24px;
  margin-left: 12px;
`
const SearchInput = styled.input`
  width: 100%;
  font-size: 0.875rem;
  border: 0;
  background-color: transparent;
  margin: 0 12px;
  text-overflow: ellipsis;
  &:focus {
    outline: 0;
  }
`
const ClearButton = styled.button`
  height: 24px;
  width: 24px;
  margin-right: 12px;
  border: 0;
  background-color: transparent;
`

export default function SearchBar() {

  const [inputValue, setInputValue ] = useState('')
  const [isClearButtonVisible, setIsClearButtonVisible] = useState(false)
  const searchInput = useRef(null)

  function focusInput() {
    searchInput.current.focus()
  }

  useEffect(() => {
    focusInput()
  }, [])

  useEffect(() => {
    if (inputValue.length > 0) {
      setIsClearButtonVisible(true)
    }
    else {
      setIsClearButtonVisible(false)
    }
  }, [inputValue])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleClickClearInput() {
    setInputValue('')
  }

  return (
    <Container onClick={focusInput}>
      <SearchLogoContainer>
        <SearchLogo />
      </SearchLogoContainer>
      <SearchInput
        placeholder="Que souhaitez-vous écouter ?"
        spellcheck="false"
        autocapitalize="off"
        autocorrect="off"
        maxlength="800"
        onChange={handleChange}
        value={inputValue}
        ref={searchInput}
      />
      {
        isClearButtonVisible && (
        <ClearButton onClick={handleClickClearInput}>
          <CrossLogo/>
        </ClearButton>
      )}
    </Container>
  )
}
