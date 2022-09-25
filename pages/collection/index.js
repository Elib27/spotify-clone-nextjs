import CollectionLayout from "../../components/collection/CollectionLayout"

export default function Collection() {
  return (
    <>
      <h1>Collection</h1>
    </>
  )
}

Collection.getLayout = function getLayout(page) {
  return (
    <CollectionLayout>
      {page}
    </CollectionLayout>
  )
}
