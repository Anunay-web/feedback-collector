import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'

const Home = () => {
  return (
    <div className="py-12 min-h-screen bg-gray-50 text-gray-800">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="sr-only">Feedback Dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between w-full">
          <div className="w-full lg:w-[360px] lg:max-w-xs xl:max-w-sm shrink-0 lg:sticky lg:top-6">
        <FeedbackForm />
          </div>
          <div className="flex-1 w-full">

        <FeedbackList />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home