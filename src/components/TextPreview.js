import ReactMarkdown from 'react-markdown'
import { TextPreviewStyle } from '../styles/textPreview.styled'

const TextPreview = ({ markdownContent }) => {
  console.log(markdownContent)
  return (
    <TextPreviewStyle>
      <div>
        <h2>Preview</h2>
      </div>
      <aside>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </aside>
    </TextPreviewStyle>
  )
}

export default TextPreview
