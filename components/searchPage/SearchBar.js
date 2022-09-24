import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchInput } from '../../store/store'
import SearchLogo from '../../public/header_logos/search.svg'
import CrossLogo from '../../public/header_logos/cross.svg'

const SearchLogoContainer = styled.div`
  height: 24px;
  width: 24px;
  opacity: 0.7;
`
const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &:focus-within ${SearchLogoContainer} {
    opacity: 1;
  }
  &:hover ${SearchLogoContainer} {
    opacity: 1;
  }
`
const SearchBarHoverContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  right: 12px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
`
const SearchInput = styled.input`
  height: 48px;
  width: 440px;
  font-size: 0.875rem;
  color: #fff;
  border: 0;
  background-color: transparent;
  padding: 6px 48px;
  text-overflow: ellipsis;
  background-color: #242424;
  border-radius: 500px;
  &:hover {
    background-color: #2a2a2a;
    box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 20%);
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #fff;
  }
  &:active {
    outline: 0;
    box-shadow: 0 0 0 2px #fff;
  }
`
const ClearButton = styled.button`
  height: 24px;
  width: 24px;
  border: 0;
  background-color: transparent;
  pointer-events: all;
`

export default function SearchBar() {

  const navigation = useSelector(state => state.navigation)
  const dispatch = useDispatch()
  
  const [isClearButtonVisible, setIsClearButtonVisible] = useState(false)

  useEffect(() => {
    if (navigation.searchInput.length > 0) {
      setIsClearButtonVisible(true)
    }
    else {
      setIsClearButtonVisible(false)
    }
  }, [navigation.searchInput])

  useEffect(() => {
    if (navigation.currentPage !== '/search'){
      dispatch(changeSearchInput(''))
    }
  }, [navigation.currentPage])

  function handleChange(e) {
    dispatch(changeSearchInput(e.target.value))
  }

  function handleClickClearInput() {
    dispatch(changeSearchInput(''))
  }

  return (
    <Container>
      <SearchBarHoverContainer>
        <SearchLogoContainer>
          <SearchLogo />
        </SearchLogoContainer>
        {
          isClearButtonVisible && (
          <ClearButton onClick={handleClickClearInput}>
            <CrossLogo/>
          </ClearButton>
        )}
      </SearchBarHoverContainer>
      <SearchInput
        placeholder="Que souhaitez-vous écouter ?"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        maxLength={800}
        onChange={handleChange}
        value={navigation.searchInput}
      />
    </Container>
  )
}
