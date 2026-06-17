import React from 'react'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <FeedbackForm />
        <FeedbackList />
    </div>
  )
}

export default Home