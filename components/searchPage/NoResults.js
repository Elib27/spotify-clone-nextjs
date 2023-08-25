import styled from "styled-components"

const NoResultsContainer = styled.div`
  padding-top: 25%;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  line-height: 1.6;
`
const NoResultsMainMessage = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  word-break: break-all;
`
const NoResultsSubMessage = styled.p`
  padding: 10px 0 30px;
`
export default function NoResults({ searchValue }) {
  return (
    <NoResultsContainer>
      <NoResultsMainMessage>
        Aucun résultat pour <br></br>
        &ldquo; {searchValue} &ldquo;
      </NoResultsMainMessage>
      <NoResultsSubMessage>
        Merci de vérifier l&apos;orthographe des mots. Vous pouvez aussi essayer d&apos;utiliser moins de mots clés ou d&apos;autres mots clés.
      </NoResultsSubMessage>
    </NoResultsContainer>
  )
}
