import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './Paginate.scss'
import { Container, Flex, Button, Spinner } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import TableAccount from '../TableAccount';
import userApi from '../../../../../api/userApi';

PaginateUser.propTypes = {
    itemsPerPage: PropTypes.number,
};
const items = [];

function PaginateUser(props) {
    const { itemsPerPage } = props
    const [page, setPage] = useState(0)
    const [isRender, setIsRender] = useState(false)
    const auth = useSelector((state) => state.auth)
    const location = useLocation()
    const [serialNum, setSerialNum] = useState(0)
    const hanldeRender = () => {
        setIsRender(!isRender)
    }
    for (let i = 0; i < page; i++) {
        items[i] = i + 1
    }

    const [currentItems, setCurrentItems] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
        setSerialNum((event.selected) * itemsPerPage)
    };
    useEffect(() => {
        const getUsers = async () => {
            const params = {
                page: currentPage,
                size: itemsPerPage,
            }

            const response = await userApi.getAllUsers(params)
            const { data, pagination } = response.data
            setPage(pagination._totalPage)
            setCurrentItems(data.users)
        }
        getUsers()
    }, [currentPage, isRender, itemsPerPage])
    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            marginTop='48px'
        >
            {
                currentItems.length > 0 ?
                    <TableAccount currentItems={currentItems} serialNum={serialNum} hanldeRender={hanldeRender} />
                    :
                    <Spinner
                        thickness='8px'
                        speed='0.8s'
                        emptyColor='gray.200'
                        color='black.300'
                        size='xl'
                        display={'block'} margin='0 auto' />
            }

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

export default PaginateUser;