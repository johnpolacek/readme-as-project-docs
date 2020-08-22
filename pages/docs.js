import { MDXProvider } from "@mdx-js/react"
import ReadMe from "../README.md"

const Docs = () => (
  <MDXProvider>
    <ReadMe />
  </MDXProvider>
)

export default Docs
