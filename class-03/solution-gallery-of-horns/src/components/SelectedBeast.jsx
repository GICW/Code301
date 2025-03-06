import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function selectedBeast(props) {

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.selectedBeast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card
            bg="dark"
            text="light"
            onClick={props.displayAsModal}
          >
            <Card.Img variant="top" alt={props.selectedBeast.title} src={props.selectedBeast.image_url} />
            <Card.Body>
              <Card.Title>{props.selectedBeast.title}</Card.Title>
              <Card.Text>
                {props.selectedBeast.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.handleClose} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default selectedBeast;
