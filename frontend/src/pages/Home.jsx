import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'

const Home = () => {
  return (
    <div className="py-12 min-h-screen bg-gray-50 text-gray-800">
      <main>
        <h1 className="sr-only">Feedback Dashboard</h1>
        <div className="flex flex-col gap-10">
        <FeedbackForm />
        <div className="border-t border-gray-200 w-full" aria-hidden="true" />
        <FeedbackList />
        </div>
      </main>
    </div>
  )
}

export default Home