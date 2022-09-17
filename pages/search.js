import styled from 'styled-components'
import { useSelector } from 'react-redux'
import PageContainer from '../components/shared/PageContainer'
import SearchResults from '../components/searchPage/SearchResults'
import SearchPageDefaultContent from '../components/searchPage/SearchPageDefaultContent'

export default function search() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useSelector(state => state.navigation)

  return (
    <PageContainer>
      {navigation.searchInput.length > 0 && <SearchResults />}
      {navigation.searchInput.length === 0 && <SearchPageDefaultContent />}
    </PageContainer>
  )

}
