import Skeleton from 'components/Skeleton'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  user_email: String
}

interface Query {
  [key: string]: string
}

export default function UserSlugRoute(props: PageProps) {
  const { user_email } = props

  return (
    <Skeleton>
      <section>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            User: {user_email}
          </h1>
        </div>
      </section>
    </Skeleton>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (
  context,
): Promise<GetStaticPropsResult<PageProps>> => {
  return {
    props: {
      user_email: context.params.slug,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs: Array<any> = ['Cengiz', 'Rayen', 'Alara', 'Savana']

  return {
    paths: slugs?.map(({ slug }) => `/users/${slug}`) || [],
    fallback: 'blocking',
  }
}
