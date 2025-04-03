
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Photos from './Photos';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  // searchQuery is the default, setSachQuery the variable that will change based on the state turns on or fooff. The DEFAULT = on / set... will change to a new variable.
  // useState is placeholder for what will happen when 'set' it to happen
  const [photos, setPhotos] = useState([]);

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
// GOOD PRACTICE prevents anything to be triggered before the search
    try {
      const API = import.meta.env.VITE_API_URL; 
      const url = `${API}/photos`;
      const response = await axios.get(url, { params: { searchQuery: searchQuery } }); //searchQuery is an keyword
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
        <Photos // for bringing in the componenet file named Photos
          photos={photos}
          searchQuery={searchQuery}
        />
      }
    </>
  )
}

export default App;
