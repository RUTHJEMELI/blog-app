import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Cointainer'
import PostaForm from '../post-form/PostaForm'

const EditPost = () => {
  const [post, setPost] = useState()
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        } else {
          navigate('/')
        }
      })
    }
  },[slug, navigate])
  return (
    <div className='py-6'>
      <Container>
        <PostaForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost