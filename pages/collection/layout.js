import CollectionNavBar from "../../components/collection/collectionNavBar"

export default function Layout({children}) {
  return (
    <>
      <CollectionNavBar />
      {children}
    </>
  )
}
