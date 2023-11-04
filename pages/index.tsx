import Skeleton from 'components/Skeleton'

export default function HomePage() {
  return (
    <>
      <Skeleton>
        <section>
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Index page
            </h1>
          </div>
        </section>
      </Skeleton>
    </>
  )
}
