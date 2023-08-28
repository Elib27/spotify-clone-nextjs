import styled from "styled-components"
import DurationLogo from '@/public/tracks_logos/time_logo.svg'

const TracksSectionColumns = styled.div`
  height: 36px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px,1fr);
  grid-gap: 16px;
  border-bottom: 1px solid hsla(0,0%,100%,0.1);
  margin-bottom: 16px;
`
const TracksSectionColumnTitle = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #b3b3b3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  white-space: nowrap;
  &:first-of-type {
    font-size: 1rem;
    justify-self: end;
    margin-right: -2px;
  }
  &:last-of-type{
    justify-self: end;
    margin-right: 32px;
  }
`

export default function TracksContainer({ columnTitles, children }) {
  return (
    <div>
      <TracksSectionColumns>
        {columnTitles.map(columnTitle => (
          <TracksSectionColumnTitle key={columnTitle}>
            {columnTitle}
          </TracksSectionColumnTitle>
        )
        )}
        <TracksSectionColumnTitle>
          <DurationLogo />
        </TracksSectionColumnTitle>
      </TracksSectionColumns>
      {children}
    </div>
  )
}
