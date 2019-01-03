<!-- @format -->

import {Flex, Box,Image} from 'rebass'
import icon from './icon/docker-white.svg'
import icon2 from './icon/aws-white.svg'
import icon3 from './icon/graphql-white.svg'
import icon4 from './icon/nodejs-white.svg'
import icon5 from './icon/rabbitmq-white.svg'
import icon6 from './icon/react-white.svg'
import icon7 from './icon/gatsby-white.svg'
import icon8 from './icon/ts-white.svg'
import Fade from 'react-reveal/Fade'

### Was Wir verwenden!

<Flex flex-direction="column" alignItems="center" justifyContent="center" flexWrap="wrap">
<Box>
    <Fade delay={200}>
    <Image width={[80,100,120]} src={icon} />
    </Fade>
    <Fade delay={500} >
    <Image width={[80,100,120]} src={icon2} />
    </Fade>
</Box>
<Box>
    <Fade delay={800} >
    <Image width={[80,100,120]} src={icon3} />
    </Fade>
    <Fade delay={1100} >
    <Image width={[80,100,120]} src={icon4} />
    </Fade>
    </Box>
<Box>
    <Fade delay={1400} >
    <Image width={[80,100,120]} src={icon5} />
    </Fade>
    <Fade delay={1700} >
    <Image width={[80,100,120]} src={icon6} />
    </Fade>
    </Box>
<Box>
    <Fade delay={2000} >
    <Image width={[80,100,120]} src={icon7} />
    </Fade>
    <Fade delay={2300} >
    <Image width={[80,100,120]} src={icon8} />
    </Fade>
</Box>
</Flex>
