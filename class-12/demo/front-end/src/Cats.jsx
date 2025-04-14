import ListGroup from 'react-bootstrap/ListGroup';

function Cats({ cats, onDelete }) {
  return (
    <ListGroup>
      {cats.length > 0 ? (
        cats.map(cat => (
          <ListGroup.Item key={cat._id}>
            <Cat info={cat} onDelete={onDelete} />
          </ListGroup.Item>
        ))
      ) : (
        <p>No cats found</p>
      )}
    </ListGroup>
  );
}

function Cat({ info, onDelete }) {

  // Renamed function for clarity
  function handleDelete() {
    onDelete(info);
  }

  return (
    <h3>
      {info.name} ({info.location}) <span onClick={handleDelete}>[X]</span>
    </h3>
  );
}

export default Cats;
