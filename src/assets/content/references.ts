/** @format */

export interface RootObject {
  header: Header
  customer: Body
  project: Body
}

interface Header {
  title: {
    de: string
    en?: string
  }
  text: {
    de: string[]
    en?: string[]
  }
}

interface Body {
  title: {
    de: string
  }
  text: {
    de: string
  }
  content: IContant[]
}
export interface IContant {
  title: {de: string}
  subtitle?: {de: string}
  description: {de: string[]}
  contactStack: {
    provider: 'facebook' | 'homepage' | 'instagram' | 'twitter' | 'whatsapp' | 'www' | 'youtube' | 'xing'
    linkTo: string
  }[]
  techStack: string[]
  imageFolder: string
}

const customer: RootObject = {
  header: {
    title: {
      de: 'Unsere Referenzen & aktuelle Projekte',
      en: '',
    },
    text: {
      de: [
        'Wir befinden uns noch in unsere Gründungsphase...',
        '',
        '... daher können wir Ihnen noch nicht all zu viele Referenzen zeigen. Doch lassen Sie sich davon nicht abschrecken wir können Ihnen trotzdem einige unsere Ideen und Umsetzungen nahe bringen.',
      ],
      en: [],
    },
  },

  customer: {
    title: {
      de: 'Unsere Kunden',
    },
    text: {
      de:
        'Erfahren Sie mehr über unsere neuesten Engagements, die Innovationen für Unternehmen und Behörden vorantreiben.',
    },
    content: [
      {
        title: {de: 'Soarce UG'},
        description: {de: ['Security Fix']},
        contactStack: [{provider: 'homepage', linkTo: 'https://www.say-promotion.de/'}],
        techStack: ['PHP7', 'Docker', 'javascript', 'jQuery'],
        imageFolder: 'soarce',
      },
      {
        title: {de: 'Wagner Bau Service'},
        description: {de: ['CMS Platform für Bauprojekte und Karriere']},
        contactStack: [
          {
            provider: 'facebook',
            linkTo: 'https://de-de.facebook.com/wagnerbauservice.de/?ref=page_internal',
          },
          {
            provider: 'www',
            linkTo: 'https://www.wagnerbauservice.de',
          },
        ],
        techStack: ['Python 3', 'Django', 'Postgres', 'Ngnix'],
        imageFolder: 'wagnerbauservice',
      },
      {
        title: {de: 'Heike Hänsel'},
        description: {
          de: [
            'Ziel war die umsetzung eine Firmenhome page.',
            'Als extra wurde ein Pflegbares Kalendermodul integriert, sodass Termine selbständig auf der Homepage veröffentlich werden können',
          ],
        },
        contactStack: [{provider: 'www', linkTo: 'https://heikehaensel.de'}],
        techStack: ['Python 3', 'Django', 'MySQL', 'AWS'],
        imageFolder: 'heikehaensel',
      },
    ],
  },

  project: {
    title: {
      de: 'Unsere aktuellen Projekte',
    },
    text: {
      de:
        'Erfahren Sie mehr über unsere neuesten Engagements, die Innovationen für Behörden und Unternehmen vorantreiben.',
    },
    content: [
      {
        title: {de: 'Caligraf'},
        subtitle: {de: 'Recognition App'},
        description: {
          de: ['Eine multidevice App zur Erkennung von Handschrift und Audios mit direkter convertieren und share'],
        },
        contactStack: [{provider: 'www', linkTo: 'https://caligraf.oseven.de'}],
        techStack: ['Google Cloud Platform', 'React', 'Firebase', 'Cloud-Functions'],
        imageFolder: 'caligraf',
      },
      {
        title: {de: 'Talos'},
        subtitle: {de: 'Markt Intelligence Report'},
        description: {
          de: [
            'Eine multidevice App zur Erstellung von Markt Intelligence Reports mit Hilfe von künstlicher Intelligence und Natural Language Processing',
          ],
        },
        contactStack: [
          {provider: 'www', linkTo: 'ttps://talosinsights.com'},
          {provider: 'instagram', linkTo: 'https://www.instagram.com/talosinsights/?hl=de'},
        ],
        techStack: ['AWS', 'ML', 'NLP', 'React'],
        imageFolder: 'talos',
      },
    ],
  },
}

export default customer
