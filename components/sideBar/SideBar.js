import styled from 'styled-components'
import SideBarLayout from './SideBarLayout'
import CreationBar from './CreationBar'
import PlaylistBar from './PlaylistBar'
import DownloadButton from './DownloadButton'

const Separator = styled.div`
  height: 1px;
  width: calc(100% - 32px); 
  background-color: #282828;
  margin: 8px 16px 0 16px;
`
const InstallButtonContainer = styled.div`
  display: flex;
`

export default function Sidebar() {

  return (
    <SideBarLayout>
      <CreationBar />
      <Separator />
      <PlaylistBar />
      <InstallButtonContainer>
        <DownloadButton />
      </InstallButtonContainer>
    </SideBarLayout>
  )
}
