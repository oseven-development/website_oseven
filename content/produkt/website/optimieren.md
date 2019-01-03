<!-- @format -->

import {Flex, Image} from 'rebass'
import chrome from './icon/chrome.svg'
import firefox from './icon/firefox.svg'
import edge from './icon/edge.svg'
import safari from './icon/safari.svg'
import opera from './icon/opera.svg'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade'

## Wir optimieren

<Flex flex-direction="column" alignItems="center" justifyContent="center">

<Fade >
   <Image width={[80,100,120]} src={chrome} style={{margin:20}} />
</Fade>
<Fade duration={500} >
    <Image width={[80,100,120]} src={firefox} style={{margin:20}}/>
</Fade>

<Fade duration={1000}>
    <Image width={[80,100,120]} src={edge} style={{margin:20}} />
</Fade>

<Fade duration={1500}>
    <Image width={[80,100,120]} src={safari} style={{margin:20}}/>
</Fade>

<Fade duration={2000}>
   <Image width={[80,100,120]} src={opera} style={{margin:20}}/>
   </Fade>
</Flex>

Mit responsiv optimierten Websites können Nutzergruppen optimal bedient werden.
In Zeiten rasant wachsender Absatzzahlen von mobilen Endgeräten wie Tablets und Smartphones
bildet Responsive Webdesign die Möglichkeit der geräteunabhängigen Kommunikation.
Für Unternehmen und Website-Betreiber stellt dieser Lösungsansatz einen wesentlichen Faktor
in der Kommunikations-Strategie dar.
