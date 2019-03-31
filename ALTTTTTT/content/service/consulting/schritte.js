/** @format */

import React from 'react'
import {Flex, Box, Image} from 'rebass'
import icon from '../consulting/icon/light-bulb.svg'
import icon2 from '../consulting/icon/checklistflat.svg'
import icon3 from '../consulting/icon/build.svg'
import icon4 from '../consulting/icon/checked.svg'
import icon5 from '../consulting/icon/refresh.svg'
import Fade from 'react-reveal/Fade'

import {ConsultingHeadline} from '../../../src/components/index'
export const Schritte = () => (
  <ConsultingHeadline h3color="white" h4color="white" pcolor="white" weight={600} style={{textAlign: 'center'}}>
    <Flex flexWrap="wrap" flexDirection="column">
      <Box>
        <h3>Projekte gelingen mit einfachen Werkzeugen</h3>
      </Box>
      <Box>
        <p>
          Wichtig ist ein Projekt in die einzelne Phasen einzuteilen, um das Projektziel auf Teilschritte herunter zu
          brechen. Dieser Aspekt reduziert außerdem die Komplexität des Projektes. Auf diese 5 Phasen setzen wir.
        </p>
      </Box>
      <Box py={[1, 1, 20, 25]}>
        <h4>Phasen des Projektmanagements</h4>
      </Box>
      <Box>
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" flexDirection="row">
          <Box px={[1, 1, 12, 18]} width={[1, 1 / 5, 1 / 5]}>
            <Fade>
              <Image py={2} width={[80, 90, 110]} src={icon} />
              <h4>Entwickeln</h4>
            </Fade>
          </Box>
          <Box px={[1, 1, 12, 18]} width={[1, 1 / 5, 1 / 5]}>
            <Fade delay={500}>
              <Image py={2} width={[80, 90, 110]} src={icon2} />
              <h4>Planen</h4>
            </Fade>
          </Box>
          <Box px={[1, 1, 12, 18]} width={[1, 1 / 5, 1 / 5]}>
            <Fade delay={1000}>
              <Image py={2} width={[80, 90, 110]} src={icon3} />
              <h4>Umsetzen</h4>
            </Fade>
          </Box>
          <Box px={[1, 1, 12, 18]} width={[1, 1 / 5, 1 / 5]}>
            <Fade delay={1500}>
              <Image py={2} width={[80, 90, 110]} src={icon4} />
              <h4>Überprüfen</h4>
            </Fade>
          </Box>
          <Box px={[1, 1, 12, 18]} width={[1, 1 / 5, 1 / 5]}>
            <Fade delay={2000}>
              <Image py={2} width={[80, 90, 110]} src={icon5} />
              <h4>Optimieren</h4>
            </Fade>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </ConsultingHeadline>
)
