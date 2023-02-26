import CollectionNavBar from "./CollectionNavBar"

export default function CollectionLayout({children}) {
  return (
    <>
      <CollectionNavBar />
      {children}
    </>
  )
}
