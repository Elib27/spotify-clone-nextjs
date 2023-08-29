import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import CollectionNavBar from '@/components/collection/CollectionNavBar'

describe('CollectionNavBar', () => {

  beforeEach(() => {
    render(
      <CollectionNavBar />,
      { wrapper: MemoryRouterProvider }
    );
  })

  it('should render the collection Navbar', () => {
    expect(screen.getByText('Playlists')).toBeInTheDocument()
    expect(screen.getByText('Podcasts')).toBeInTheDocument()
    expect(screen.getByText('Artistes')).toBeInTheDocument()
    expect(screen.getByText('Albums')).toBeInTheDocument()
  })

  it('navigates to the playlists page', () => {
    fireEvent.click(screen.getByText('Playlists'));
    expect(mockRouter.asPath).toEqual('/playlists')
  });

  it('navigates to the podcasts page', () => {
    fireEvent.click(screen.getByText('Podcasts'));
    expect(mockRouter.asPath).toEqual('/podcasts')
  });

  it('navigates to the albums page', () => {
    fireEvent.click(screen.getByText('Albums'));
    expect(mockRouter.asPath).toEqual('/albums')
  });

  it('navigates to the artists page', () => {
    fireEvent.click(screen.getByText('Artistes'));
    expect(mockRouter.asPath).toEqual('/artists')
  });
})