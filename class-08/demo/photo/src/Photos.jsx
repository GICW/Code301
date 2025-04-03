function Photos(props) {

  return (
    props.photos.map((photo, idx) => (
      <div key={idx}>
        {photo.img_url &&
          <a href={photo.original_image}><img alt={props.searchQuery} width={200} src={photo.img_url} /></a>
        }
        <span>photo by: {photo.photographer} from unsplash</span>
      </div>
    ))// props have to be lowercase
  )
}

export default Photos;
