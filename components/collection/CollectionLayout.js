import CollectionNavBar from "./collectionNavBar"

export default function CollectionLayout({children}) {
  return (
    <>
      <CollectionNavBar />
      {children}
    </>
  )
}
