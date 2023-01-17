import { useEffect, useState } from "react"
import CollectionLayout from "../../components/collection/CollectionLayout"
import CollectionPageContainer from "../../components/collection/CollectionPageContainer"
import PlaylistCard from "../../components/collection/PlaylistCard"

export default function Albums() {

  const [likedAlbums, setLikedAlbums] = useState(null)

  async function getLikedAlbums() {
    const response = await fetch('/api/getLikedAlbums')
    const data = await response.json()
    setLikedAlbums(data)
    console.log(data)
  }

  useEffect(() => {
    getLikedAlbums()
  }, [])

  if (!likedAlbums) return

  return (
    <CollectionPageContainer title="Albums">
      {likedAlbums.map(album => (
        <PlaylistCard
          title={album.name}
          description={album.artist.join(', ')}
          cover_url={album.image}
          key={album.id}
        />
      ))}
    </CollectionPageContainer>
  )
}

Albums.getLayout = page => <CollectionLayout>{page}</CollectionLayout>