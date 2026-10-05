import { useState } from "react";
import { Card, Form, Button, CardBody, Table, Modal } from "react-bootstrap"

const dataUsers =[
  {
    name: "Hudaaayy",
    email: "huudaayy@gmail.com",
    password : 123456
  },
    {
    name: "Wooodyy",
    email: "wooodddyy@gmail.com",
    password : 123456
  },
    {
    name: "ajayyy",
    email: "ajayyyy@gmail.com",
    password : 123456
  },
]
const ListUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(dataUsers);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    status: 'Active'
  })

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    const newUser ={
      ...formData, id: Date.now(),
    };
    setUsers([...users, newUser]);
    setShowModal(false);
  };

  return (
    <>
      <Card className="shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="mb-0 fw-bold">Data User</h4>
            </div>
              <Button variant="primary" onClick={handleOpenModal}>
                Create New User
              </Button>
          </div>
          <Table responsive hover className="align-middle mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) =>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>active</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm" className="me-2">Delete</Button>
                </td>
              </tr>
                
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleOpenModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required
                value={formData.email} onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" required 
                value={formData.password} onChange={handleChange}></Form.Control>
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button type="submit" variant="secondary" onClick={handleSumbit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListUser;