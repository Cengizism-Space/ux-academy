import { iThumb } from './Thumb'
import Thumb from './Thumb'

interface PageProps {
  title: string
  thumbs: Array<iThumb>
}

export default function Thumbs(props: PageProps) {
  const { title, thumbs } = props

  return (
    <div className="container px-5 py-8 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
        {title}
      </h1>
      <div className="flex flex-wrap -m-2">
        {thumbs.map((thumb, i) => (
          <Thumb key={i} thumb={thumb} />
        ))}
      </div>
    </div>
  )
}
