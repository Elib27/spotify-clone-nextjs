import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchInput } from '../../store/store'
import SearchLogo from '../../public/header_logos/search.svg'
import CrossLogo from '../../public/header_logos/cross.svg'

const Container = styled.div`
  height: 48px;
  width: 364px;
  background-color: #2a2a2a;
  box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 20%);
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
    box-shadow: 0 0 0 2px #fff;
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

  const navigation = useSelector(state => state.navigation)
  const dispatch = useDispatch()
  
  const [isClearButtonVisible, setIsClearButtonVisible] = useState(false)
  const searchInput = useRef(null)

  function focusInput() {
    searchInput.current.focus()
  }

  useEffect(() => {
    focusInput()
  }, [])

  useEffect(() => {
    if (navigation.searchInput.length > 0) {
      setIsClearButtonVisible(true)
    }
    else {
      setIsClearButtonVisible(false)
    }
  }, [navigation.searchInput])

  function handleChange(e) {
    dispatch(changeSearchInput(e.target.value))
  }

  function handleClickClearInput() {
    dispatch(changeSearchInput(''))
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
        value={navigation.searchInput}
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
