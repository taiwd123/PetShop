import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import { FaUserFriends, FaDog } from 'react-icons/fa'
import { MdHomeRepairService } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

OverviewDash.propTypes = {
    totalUser: PropTypes.number,
    totalPet: PropTypes.number,
    totalService: PropTypes.number,
    toltalRevenue: PropTypes.number
};

function OverviewDash(props) {
    const { toltalRevenue, totalPet, totalService, totalUser } = props

    return (
        <Flex
            margin='20px 0'
            width='100%'
            height='200px'
            boxShadow='1px 1px 4px 2px #cecece'
            alignItems='center'
            borderRadius='6px'
        >
            <Flex
                width='100%'
                justifyContent='space-around'
            >
                <Tooltip label={`Total User: ${totalUser ? totalUser : 0}`}>
                    <Flex
                        alignItems='center'
                        cursor='default'
                    >

                        <Icon fontSize='48px' as={FaUserFriends} />
                        <Text marginLeft='8px' fontSize='32px'>{totalUser ? totalUser : 0}</Text>

                    </Flex>
                </Tooltip>

                <Tooltip label={`Total Pet: ${totalPet ? totalPet : 0}`}>
                    <Flex
                        alignItems='center'
                    >
                        <Icon fontSize='48px' as={FaDog} />
                        <Text marginLeft='8px' fontSize='32px'>{totalPet ? totalPet : 0}</Text>
                    </Flex>
                </Tooltip>

                <Tooltip label={`Total Service: ${totalService ? totalService : 0}`}>
                    <Flex
                        alignItems='center'
                    >
                        <Icon fontSize='48px' as={MdHomeRepairService} />
                        <Text marginLeft='8px' fontSize='32px'>{totalService ? totalService : 0}</Text>
                    </Flex>
                </Tooltip>

                <Tooltip label={`Total Revenue: ${toltalRevenue ? toltalRevenue : 0}`}>
                    <Flex
                        alignItems='center'
                    >
                        <Icon fontSize='48px' as={RiMoneyDollarCircleLine} />
                        <Text marginLeft='8px' fontSize='32px'>{toltalRevenue ? toltalRevenue : 0}</Text>
                    </Flex>
                </Tooltip>
            </Flex>
        </Flex>
    );
}

export default OverviewDash;