import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Flex } from '@chakra-ui/react';
import { FaPlus } from "react-icons/fa";
import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
} from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons';

AccordionQuestions.propTypes = {

};

function AccordionQuestions(props) {
   const [statusPhilosophy, setStatusPhilosophy] = useState(true);
   const handleExtendPhilosophy = () => {
      setStatusPhilosophy(!statusPhilosophy)
      if (statusOrganization === false) {
         setStatusOrganization(true);
      }
      if (statusPartnerships === false) {
         setStatusPartnerships(true)
      }
   }

   const [statusOrganization, setStatusOrganization] = useState(true)
   const handleExtendOrganization = () => {
      setStatusOrganization(!statusOrganization)
      if (statusPhilosophy === false) {
         setStatusPhilosophy(true);
      }
      if (statusPartnerships === false) {
         setStatusPartnerships(true)
      }
   }

   const [statusPartnerships, setStatusPartnerships] = useState(true)
   const handleExtendPartnerships = () => {
      setStatusPartnerships(!statusPartnerships)
      if (statusPhilosophy === false) {
         setStatusPhilosophy(true)
      }
      if (statusOrganization === false) {
         setStatusOrganization(true)
      }
   }

   return (
      <Container
         margin='48px 0 0 0'
         padding='0'
      >
         <Accordion allowToggle>
            <AccordionItem>
               <Heading>
                  <AccordionButton
                     boxShadow='none !important'
                     onClick={handleExtendPhilosophy}
                  >
                     <Flex
                        justifyContent='start'
                        alignItems='center'
                     >
                        <Container
                           maxWidth='100%'
                           width='auto'
                           padding={'15px 15px'}
                           backgroundColor='#D61C62'
                           borderRadius='50%'
                           color='#fff'
                           display='flex'
                           justifyContent='center'
                           alignItems='center'
                        >
                           {statusPhilosophy === false ? <MinusIcon /> : <FaPlus />}
                        </Container>
                        <Heading
                           marginLeft='35px'
                           fontSize='18px'
                           color={'#1446A0'}
                           transition='color .2s ease-in-out'
                           _hover={{
                              color: '#D61C62'
                           }}
                        >
                           Our Philosophy
                        </Heading>
                     </Flex>
                  </AccordionButton>
               </Heading>
               <AccordionPanel
                  paddingRight={'0'}
                  paddingLeft='84px'
                  fontSize='16px'
                  lineHeight='24px'
                  marginBottom='16px'
                  color='#6f6f6f'
                  pb={4}>
                  Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                  <br />
                  <br />
                  Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
               <Heading>
                  <AccordionButton
                     boxShadow='none !important'
                     onClick={handleExtendOrganization}
                  >
                     <Flex
                        justifyContent='start'
                        alignItems='center'
                     >
                        <Container
                           maxWidth='100%'
                           width='auto'
                           padding={'15px 15px'}
                           backgroundColor='#D61C62'
                           borderRadius='50%'
                           color='#fff'
                           display='flex'
                           justifyContent='center'
                           alignItems='center'
                        >
                           {statusOrganization === false ? <MinusIcon /> : <FaPlus />}
                        </Container>
                        <Heading
                           marginLeft='35px'
                           fontSize='18px'
                           color={'#1446A0'}
                           transition='color .2s ease-in-out'
                           _hover={{
                              color: '#D61C62'
                           }}
                        >
                           Our Organization
                        </Heading>
                     </Flex>
                  </AccordionButton>
               </Heading>
               <AccordionPanel
                  paddingRight={'0'}
                  paddingLeft='84px'
                  fontSize='16px'
                  lineHeight='24px'
                  marginBottom='16px'
                  color='#6f6f6f'
                  pb={4}>
                  Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                  <br />
                  <br />
                  Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
               <Heading>
                  <AccordionButton
                     boxShadow='none !important'
                     onClick={handleExtendPartnerships}
                  >
                     <Flex
                        justifyContent='start'
                        alignItems='center'
                     >
                        <Container
                           maxWidth='100%'
                           width='auto'
                           padding={'15px 15px'}
                           backgroundColor='#D61C62'
                           borderRadius='50%'
                           color='#fff'
                           display='flex'
                           justifyContent='center'
                           alignItems='center'
                        >
                           {statusPartnerships === false ? <MinusIcon /> : <FaPlus />}
                        </Container>
                        <Heading
                           marginLeft='35px'
                           fontSize='18px'
                           color={'#1446A0'}
                           transition='color .2s ease-in-out'
                           _hover={{
                              color: '#D61C62'
                           }}
                        >
                           Partnerships with our team
                        </Heading>
                     </Flex>
                  </AccordionButton>
               </Heading>
               <AccordionPanel
                  paddingRight={'0'}
                  paddingLeft='84px'
                  fontSize='16px'
                  lineHeight='24px'
                  marginBottom='16px'
                  color='#6f6f6f'
                  pb={4}>
                  Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                  <br />
                  <br />
                  Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </Container>
   );
}

export default AccordionQuestions;