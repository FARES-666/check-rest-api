import React from 'react'
import { Button, Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../redux/actions';
import EditUser from './EditUser';
const UserCard = ({ user }) => {
  const dispatch = useDispatch
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            {user.name}
          </Card.Title>
          <Card.Text>
            {user.email}
            {user.phone}
          </Card.Text>
          <EditUser user={user} />
          <Button variant="primary" onClick={() => { dispatch(deleteUser(user._id)); dispatch(getUsers()) }}>DELETE</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard;