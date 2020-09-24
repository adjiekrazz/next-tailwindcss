import Layout from '../components/layout'

function IndexPage({ title }) {
  return (
    <Layout title="Krazz it!">
      <div className="container mx-2 lg:mx-auto pl-3">
        <div className="text-gray-700 bg-white mt-8 mx-auto">
          <p>Dashboard</p>
        </div>
        <div className="shadow-md text-gray-700 bg-white py-2 px-4 mx-auto mt-2">
          Hello {title}
        </div>
      </div>
    </Layout>
  )
}

export function getServerSideProps() {
  const data = 'data'

  return {
    props: {
      title: data
    }
  }
}

export default IndexPage