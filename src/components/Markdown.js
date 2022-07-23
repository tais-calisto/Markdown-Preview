import { useRef, useEffect } from 'react'
import useSavedState from '../utils/useSavedState'
import TextPreview from './TextPreview'
import { MarkdownInputStyle } from '../styles/markdown.styled'
import { RiDeleteBinFill } from 'react-icons/ri'
import { MdFileCopy } from 'react-icons/md'
import { BodyStyle } from '../styles/body'
import { text } from '../utils/inicialText'

const Markdown = () => {
  const [markdownContent, setMarkdownContent] = useSavedState('text', text)

  useEffect(() => {
    setMarkdownContent(text)
  }, [])

  const refMarkdown = useRef(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownContent)
  }

  return (
    <BodyStyle>
      <MarkdownInputStyle>
        <div>
          <h2>Markdown</h2>
          <nav>
            <button
              onClick={() => {
                refMarkdown.current.value = ''
                setMarkdownContent('')
              }}
            >
              <RiDeleteBinFill />
            </button>
            <button onClick={copyToClipboard}>
              <MdFileCopy />
            </button>
          </nav>
        </div>
        <textarea
          cols={'5'}
          wrap={'hard'}
          resize={'none'}
          value={markdownContent}
          ref={refMarkdown}
          onChange={() => {
            setMarkdownContent(refMarkdown.current.value)
          }}
          onClick={() => {
            if (markdownContent === text) setMarkdownContent('')
          }}
        ></textarea>
      </MarkdownInputStyle>
      <TextPreview markdownContent={markdownContent} />
    </BodyStyle>
  )
}

export default Markdown
