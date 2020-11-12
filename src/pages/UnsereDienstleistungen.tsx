/** @format */
import React from 'react'

import {HeadTextIntro} from '../components'
import Challenge from '../assets/svg/challenge.svg'

export default () => (
  <>
    <HeadTextIntro>Gemeinsam Ideen vorantreiben</HeadTextIntro>
    <section>
      <p>
        Um aus einer Idee ein erfolgreiches Unternehmen zu machen, bedarf es viel Arbeit, kritisches Hinterfragen und
        eine saubere, schnelle Umsetzung. Startups scheitern dabei vor allem an den letzten beiden Punkten, da häufig
        Expertise, Erfahrung oder der richtige Ansprechpartner fehlt. Durch unsere langjährige Erfahrung in der
        Konzeption und Umsetzung von Business Modellen und Softwarelösungen helfen wir euch eure Ideen bestmöglich
        umzusetzen und ein erfolgreiches Unternehmen zu werden!
      </p>
    </section>

    <div className="bg-white">
      <section className=" flex flex-col">
        <h2 className="text-4xl text-center text-primary md:w-6/12 mx-auto mb-8">
          Dies erreichen wir über verschiedene Formate:
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center text-black">
          <div className="w-full text-center ">
            <Challenge className="w-16 h-16 text-center mx-auto" />
            Challenge
          </div>
          <div className="w-full text-center ">
            <Challenge className="w-16 h-16 text-center mx-auto" />
            Wissensaustausch
          </div>
          <div className="w-full text-center ">
            <Challenge className="w-16 h-16 text-center mx-auto" />
            Problemlösung
          </div>
          <div className="w-full text-center ">
            <Challenge className="w-16 h-16 text-center mx-auto" />
            Konzeption
          </div>
          <div className="w-full text-center col-span-2 lg:col-span-1 ">
            <Challenge className="w-16 h-16 text-center mx-auto" />
            Umsetzung
          </div>
        </div>
      </section>
    </div>
  </>
)
