// @flow
import stylis from 'stylis'
import type { Interpolation } from '../types'

stylis.set({
  global: false,
  cascade: false,
  keyframe: false,
  prefix: true,
  compress: true,
  semicolon: true,
})

const stringifyRules = (
  rules: Array<Interpolation>,
  selector: ?string,
  prefix: ?string,
): string => {
  const flatCSS = rules
    .join('')
    .replace(/^\s*\/\/.*$/gm, '') // replace JS comments

  const cssStr = (selector && prefix) ?
    `${prefix} ${selector} { ${flatCSS} }` :
    flatCSS

  return stylis(prefix || !selector ? '' : selector, cssStr)
}

export default stringifyRules
