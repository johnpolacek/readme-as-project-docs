import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../README.md"

const Docs = () => (
  <MDXProvider>
    <div>
      <MarkdownContent />
    </div>
  </MDXProvider>
)

export default Docs
