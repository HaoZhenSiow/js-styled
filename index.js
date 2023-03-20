import postcssJs from "postcss-js"
import postcss from "postcss"
import { createUseStyles } from 'react-jss'

export default function styled(css) {
  const root = postcss.parse(css)
  const jss = postcssJs.objectify(root)
  const useStyle = createUseStyles(jss)
  return useStyle
}