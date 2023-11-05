import { toPlainText } from '@portabletext/react'
import * as demo from 'lib/demo.data'

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-400">
        <div
          className={`container 
                          mx-auto 
                          py-4 
                          px-5 
                          flex 
                          flex-wrap 
                          flex-col 
                          sm:flex-row`}
        >
          <p
            className={`text-sm 
                            text-center 
                            sm:text-left`}
          >
            Alten Decks 2023
          </p>
          <span
            className={`sm:ml-auto 
                            sm:mt-0 
                            mt-2 
                            sm:w-auto 
                            w-full 
                            sm:text-left 
                            text-center 
                            text-sm`}
          >
            {toPlainText(demo.description)}
          </span>
        </div>
      </div>
    </footer>
  )
}
