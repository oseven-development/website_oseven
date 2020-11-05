/** @format */

import {graphql, useStaticQuery} from 'gatsby'
import {getCurrentLangKey, getLangs, getUrlForLang} from 'ptz-i18n'

interface Result {
  langKey: 'de' | 'en'
  langsMenu: {langKey: string; selected: boolean; link: string}[]
}

export default (): Result => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  const url = typeof window !== 'undefined' ? window?.location?.pathname : ''
  const {langs, defaultLangKey} = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)

  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/')
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/'),
  }))

  return {langKey, langsMenu}
}
