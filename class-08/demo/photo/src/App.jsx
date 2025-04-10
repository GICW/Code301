import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Photos from './Photos';

function App() {
  const [searchQuery, setSearchQuery] = useState('');// [1,2] 1 is our default, 2 set whatever varialbe to be changed. thats why we use state, becuase useState is light swtich button, on / off 
  const [photos, setPhotos] = useState([]);

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
//good line to always have 
    try {
      const API = import.meta.env.VITE_API_URL;
      const url = `${API}/photos`;
      const response = await axios.get(url, { params: { searchQuery: searchQuery } });
      setPhotos(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Find Photos About...</Form.Label>
          <Form.Control onChange={updateSearchQuery} type="text" placeholder="Enter a search term" />
        </Form.Group>
      </Form>

      {photos.length > 0 &&
        <Photos//this is for bringing in my component fie named "Photos"
          photos={photos}
          searchQuery={searchQuery}
        />
      }
    </>
  )
}

export default App;
