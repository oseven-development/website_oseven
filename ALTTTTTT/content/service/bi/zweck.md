<!-- @format -->

import { Flex, Box ,Image} from 'rebass'
import icon from './icon/report.svg'
import icon3 from './icon/report3.svg'

### Der Zweck von Berichten

<Flex justifyContent="center" alignItems="flex-start" alignContent="center" flexWrap="wrap"> 
<Box width={[1,1/2,1/2]} px={[1,2,3]}>
<Image m={[1,10,25]} width={[100,150,180]} src={icon} />
<p>
Berichte unterstützen einzelne Entscheidungsebenen bis hin zu Team oder Einzelentscheidungen. Dazu werden im Rahmen des Berichtswesens Informationen gesammelt, verarbeitet und präsentiert.
</p>
</Box>
<Box width={[1,1/2,1/2]}  px={[1,2,3]}>
<Image m={[1,10,25]} width={[100,150,180]} src={icon3} />
<p>So wird für Transparenz gesorgt, Entscheidungsträger erhalten einen Überblick über das Unternehmen und können so fundierte Entscheidungen treffen. Durch die Auswertung der Daten aus dem bisherigen Geschäft können Entscheidungen für die Zukunft getroffen werden.</p>
</Box>
</Flex>
