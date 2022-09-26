import styled from 'styled-components'
import { useSelector } from 'react-redux'
import PageContainer from '../components/shared/PageContainer'
import SearchResults from '../components/searchPage/SearchResults'
import CategoryFilterBar from '../components/searchPage/CategoryFilterBar'
import SearchPageDefaultContent from '../components/searchPage/SearchPageDefaultContent'

export default function Search() {
  
  const navigation = useSelector(state => state.navigation)

  return (
    <>
      {navigation.searchInput.length > 0  && (
        <CategoryFilterBar />
      )}
      <PageContainer>
        {navigation.searchInput.length > 0 ? (
          <>
            <SearchResults />
          </>
        ) : (
          <SearchPageDefaultContent />
        )}
      </PageContainer>
    </>
  )
}
