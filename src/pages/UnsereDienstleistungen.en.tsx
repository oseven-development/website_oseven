/** @format */
import React from 'react'

import {HeadTextIntro} from '../components'
import Challenge from '../assets/svg/challenge.svg'

export default () => (
  <>
    <>
      <HeadTextIntro english>Driving ideas forward together</HeadTextIntro>
      <section>
        <p>
          To turn an idea into a successful company, it takes a lot of work, critical questioning and a clean, fast
          implementation. Startups fail especially at the last two points, because often Expertise, experience or the
          right contact person is missing. Through our many years of experience in the Conception and implementation of
          business models and software solutions we help you to realize your ideas in the best possible way and become a
          successful company!
        </p>
      </section>

      <div className="bg-white">
        <section className=" flex flex-col">
          <h2 className="text-4xl text-center text-primary md:w-6/12 mx-auto mb-8">
            We achieve this through various formats:
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center text-black">
            <div className="w-full text-center ">
              <Challenge className="w-16 h-16 text-center mx-auto" />
              Challenge
            </div>
            <div className="w-full text-center ">
              <Challenge className="w-16 h-16 text-center mx-auto" />
              Exchange of knowledge
            </div>
            <div className="w-full text-center ">
              <Challenge className="w-16 h-16 text-center mx-auto" />
              Troubleshooting
            </div>
            <div className="w-full text-center ">
              <Challenge className="w-16 h-16 text-center mx-auto" />
              Concept
            </div>
            <div className="w-full text-center col-span-2 lg:col-span-1 ">
              <Challenge className="w-16 h-16 text-center mx-auto" />
              Implementation
            </div>
          </div>
        </section>
      </div>
    </>
  </>
)
