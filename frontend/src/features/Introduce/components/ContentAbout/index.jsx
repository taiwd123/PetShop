import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Divider, Flex, Container, Text, Image } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';

Content.propTypes = {

};

function Content(props) {
    return (
        <>
            <Heading
                fontSize='40px'
                fontWeight='500'
                marginBottom='8px'
            >
                Our Misson
            </Heading>
            <span
                style={{
                    color: '#8a8a8a',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '24px'
                }}
            >
                Since 1995 helping to find loving homes for Dogs and Cats
            </span>
            <Divider
                margin='10px 0'
                border='1px solid #cecece !important'
                width='60px'
            />
            <Flex>
                <Container
                    width='100%'
                    padding='0'
                    color='#6f6f6f'
                >
                    <Text
                        fontSize='16px'
                        margin='24px 0 16px 0'
                    >
                        Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
                        Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                        In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                    </Text>
                    <Text
                        fontSize='16px'
                        marginBottom='16px'
                    >
                        Nec elementum ipsum convall.
                        Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.
                    </Text>
                </Container>
                <Container>
                    <Image src={IMAGES.AboutContent} borderRadius='8px' />
                </Container>
            </Flex>
        </>
    );
}

export default Content;