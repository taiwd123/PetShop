import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, SkeletonCircle } from '@chakra-ui/react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import petAPI from '../../../../../../api/petApi';

ChartCategory.propTypes = {

};
let data = []
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize='22px' >
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`Total ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

function ChartCategory(props) {
    const [listCat, setListCat] = useState(null)
    const [listDog, setListDog] = useState(null)

    useEffect(() => {
        const getAllPet = async (category, params, callBack) => {
            const response = await petAPI.getPetsByCategory(category, params)
            const { data } = response.data
            callBack(data.pets)
            // console.log('data.pets: ', data.pets);
        }
        getAllPet('dog', {
            page: 0,
            size: 99,
        }, setListDog)
        getAllPet('cat', {
            page: 0,
            size: 99,
        }, setListCat)

    }, [])
    if (listCat !== null && listDog !== null) {
        data = [
            { name: 'Dog', value: listDog.length },
            { name: 'Cat', value: listCat.length },
        ];
    }
    else if (listCat === null && listDog !== null) {
        data = [
            { name: 'Dog', value: listDog.length },
        ];
    }
    else if (listCat !== null && listDog === null) {
        data = [
            { name: 'Cat', value: listCat.length },
        ];
    }
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <>
            {
                data.length !== 0 ?
                    <Box>
                        <PieChart width={420} height={420}>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx={200}
                                cy={200}
                                innerRadius={120}
                                outerRadius={160}
                                fill="#0ec4cb"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                            />
                        </PieChart>
                        <Text textTransform='uppercase' fontWeight='bold' textAlign='center'>pie chart by category</Text>
                    </Box> :
                    <SkeletonCircle size='420' />
            }
        </>
    );
}

export default ChartCategory;