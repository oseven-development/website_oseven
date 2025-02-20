/** @format */

// react and gatsby
import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { HeadTextIntro, Seo, OfferCard } from '../components'

import AWSLogo from '../assets/svg/Amazon_Web_Services_Logo.svg'
import PytorchLogo from '../assets/svg/pytorch.svg'
import { ChildImageSharp } from '..'

export const query = graphql`
  {
    file(relativePath: { eq: "consultingParallax.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

const Index = ({
  data,
}: {
  data: {
    file: ChildImageSharp
  }
}) => {
  return (
    <>
      <Seo
        title="oseven aws-cloud und maschine-learning consulting"
        description="Wir machen AWS-Cloud und ML"
        keywords="oseven aws cloud consulting maschine-learning ml"
        image={data.file.childImageSharp.gatsbyImageData.images.fallback.src}
      />
      <HeadTextIntro>
        <>
          Wir sind <span className="font-bold text-secondary">Consultants</span> für die{' '}
          <span className="font-bold text-secondary">AWS-Cloud</span> und für{' '}
          <span className="font-bold text-secondary">Maschinelles Lernen</span>
        </>
      </HeadTextIntro>

      <section className="md:flex md:flex-row-reverse p-0 md:py-20 w-full">
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt={'name'}
          aria-hidden="true"
          className="md:w-1/2"
        />
        <div className="md:mx-6 p-6 md:p-8 md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <p className="md:w-full mb-8 md:text-2xl">
            Mit unserer Expertise und Erfahrung helfen wir dir, deine{' '}
            <span className="text-secondary">AWS-Projekt</span> erfolgreich zu machen. Wir unterstützen bei der{' '}
            <span className="text-secondary">Architektur </span> oder im Bereich{' '}
            <span className="text-secondary">DevOps</span>. Im Zusammenspiel{' '}
            <span className="text-secondary">Maschinelles Lernen und Cloud</span> helfen wir eine Lösung in Produktion
            zu bringen.
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2" to="UnsereDienstleistungen">
            Unsere Dienstleistungen
          </Link>
        </div>
      </section>

      <div className="bg-white text-black">
        <section className="py-12">
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6">
            <OfferCard
              {...{
                title: 'Cloud-Consutling',
                logo: AWSLogo,
                logoLink: 'https://aws.amazon.com/',
                content: [
                  'Mehrfach von AWS zertifiziert.',
                  'Aufbau von Release Management.',
                  'Beratung zu CI-CD pipelines',
                  'Hands-On mitarbeit im Projekt',
                  'Beratung zu Serverless',
                ],
                technologie: [
                  { href: 'https://aws.amazon.com/de/', text: 'aws' },
                  { href: 'http://serverlessland.com/', text: 'serverless' },
                  { href: 'https://github.com', text: 'github' },
                  { href: 'https://kubernetes.io/de/', text: 'kubernetes' },
                ],
              }}
            />

            <OfferCard
              {...{
                title: 'AWS-Architektur',
                logo: AWSLogo,
                logoLink: 'https://aws.amazon.com/',
                content: [
                  'Beratung zu AWS-Architekturen',
                  'Design von verteilten Systemen.',
                  'Erstellen und Umsetzung von AWS-Architekturen',
                  'Serverless-Architekturen',
                ],
                technologie: [
                  { href: 'https://aws.amazon.com/de/', text: 'aws' },
                  { href: 'http://serverlessland.com/', text: 'serverless' },
                  { href: 'https://github.com', text: 'github' },
                  { href: 'https://kubernetes.io/de/', text: 'kubernetes' },
                ],
              }}
            />

            <OfferCard
              {...{
                title: 'Machine Learning',
                logo: PytorchLogo,
                logoLink: 'https://pytorch.org/',
                content: ['ML', 'Data', 'ML-Ops', 'Serverless-Architekturen'],
                technologie: [
                  { href: 'https://aws.amazon.com/de/', text: 'aws' },
                  { href: 'http://serverlessland.com/', text: 'serverless' },
                  { href: 'https://github.com', text: 'github' },
                  { href: 'https://kubernetes.io/de/', text: 'kubernetes' },
                ],
              }}
            />
          </div>
        </section>
      </div>

      <div className="bg-black text-white">
        <section className="flex flex-col md:py-36 space-y-8 md:space-y-24">
          <p className="text-center md:w-1/2 mx-auto md:text-2xl">
            Wir beraten dich bei deinem AWS-Cloud Projekt und unterstützen mit Hands-On im Projekt, so dass es ein
            erfolg wird.
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2 mx-auto" to="UnsereArbeit">
            Unsere Arbeit
          </Link>
        </section>
      </div>

      <div className="bg-white text-black">
        <section className="flex flex-col md:py-36 space-y-8 md:space-y-24">
          <p className="text-center md:w-1/2 mx-auto md:text-2xl">
            Du wolltest schon immer vom Maschinellen Lernen profitieren und hast Anwendungsfälle die nur drauf warten
            gelöst zu werden?
          </p>
          <Link className="rounded-full ghost px-4 py-2 inline-block mb-4 mt-2 mx-auto" to="UnsereArbeit">
            Unsere Arbeit
          </Link>
        </section>
      </div>
    </>
  )
}

export default Index
