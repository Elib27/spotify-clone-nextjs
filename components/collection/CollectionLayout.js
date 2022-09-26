import CollectionNavBar from "./collectionNavBar"

export default function CollectionLayout({children}) {
  return (
    <div>
      <CollectionNavBar />
      {children}
    </div>
  )
}

// enlever div et mettre fragment
