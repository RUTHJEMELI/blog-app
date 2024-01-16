import React from 'react'
import Container from '../components/container/Cointainer'
import PostaForm from '../post-form/PostaForm'
const AddPost = () => {
  return (
    <div className='py-6'>
      <Container>
        <PostaForm/>
      </Container>
    </div>
  )
}

export default AddPost