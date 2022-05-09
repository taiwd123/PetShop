import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './PaginateHistory.scss'
import { Container, Flex, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import serviceApi from '../../../../api/serviceApi';
import TablePanel from '../TablePanel';
import { useSelector } from 'react-redux'
import billAPI from '../../../../api/billApi';
import bookServiceAPI from '../../../../api/bookServiceApi';

PaginateHistory.propTypes = {
    itemsPerPage: PropTypes.number,
    category: PropTypes.string,
    historyState: PropTypes.string
};
const items = [];
const dataHistory = [
    {
        id: 'abcxyz',
        datetime: '2022-04-04',
        amount: 100
    },
    {
        id: 'abcxyz',
        datetime: '2022-04-05',
        amount: 100
    },
    {
        id: 'abcxyz',
        datetime: '2022-04-06',
        amount: 100
    },
    {
        id: 'abcxyz',
        datetime: '2022-04-07',
        amount: 100
    },
    {
        id: 'abcxyz',
        datetime: '2022-04-08',
        amount: 100
    },
]

function PaginateHistory(props) {
    const { itemsPerPage, category, historyState } = props
    const [page, setPage] = useState(0)
    const [prePage, setPrePage] = useState(0)
    const auth = useSelector((state) => state.auth)
    const location = useLocation()
    const [serialNum, setSerialNum] = useState(0)

    for (let i = 0; i < page; i++) {
        items[i] = i + 1
    }

    const [currentItems, setCurrentItems] = useState([]);

    const [currentPagePet, setCurrentPagePet] = useState(0);
    const [currentPageService, setCurrentPageService] = useState(0);

    const handlePageClick = (event) => {
        if (historyState === 'Pets') {
            setCurrentPagePet(event.selected)
        }
        else {
            setCurrentPageService(event.selected)
        }
        setSerialNum((event.selected) * itemsPerPage)
    };
    useEffect(() => {
        if (historyState === 'Pets') {
            const getBillByUser = async () => {
                const params = {
                    name: auth.userName,
                    page: currentPagePet,
                    size: itemsPerPage,
                }

                const response = await billAPI.getBillsByUsername(params)
                const { data, pagination } = response.data
                // console.log('data pets: ', data);
                // console.log(pagination);
                setPage(pagination._totalPage)
                setCurrentItems(data.bills)
            }
            getBillByUser()
        }
        if (historyState === 'Services') {
            const params = {
                name: auth.userName,
                page: currentPageService,
                size: itemsPerPage,
            }
            const getServiceByUser = async () => {
                const response = await bookServiceAPI.findByUser(params)
                const { data, pagination } = response.data
                // console.log('data service: ', data);
                // console.log(pagination);
                setPage(pagination._totalPage)
                setCurrentItems(data["bookingServices"])
            }
            getServiceByUser()
        }
    }, [currentPagePet, currentPageService, historyState, location.state])
    // console.log("Current page: ", currentPage);
    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            marginTop='48px'
        >
            <TablePanel currentItems={currentItems} serialNum={serialNum} stateHistory={historyState} />

            <Flex
                alignItems='center'
                justifyContent='end'
            >
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel=">"
                    forcePage={0}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    disabledClassName='paginate__disabled'
                    activeClassName='paginate__active'
                />
            </Flex>
        </Container>
    );
}

export default PaginateHistory;