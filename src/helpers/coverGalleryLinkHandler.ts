const NASA_ARCHIVE_LINK = 'https://www.flickr.com/photos/nasacommons/'
const MET_MUSEUM_LINK = 'https://www.metmuseum.org/art/collection'

const coverGalleryLinkHandler = (title: string): string => {
  return title.includes('The Met Museum') ? MET_MUSEUM_LINK : NASA_ARCHIVE_LINK
}

export default coverGalleryLinkHandler
