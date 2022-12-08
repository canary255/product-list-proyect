import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
    try {
        const range = [];
        const num = Math.ceil(data.length / rowsPerPage);
        for (let i = 1; i <= num; i++) {
            range.push(i);
        }
        return range;
    } catch(e) {
        return []
    }
};

const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        try {

            const range = calculateRange(data, rowsPerPage);
            setTableRange([...range]);
            
            //Reverse array here
            const reverse = data.slice(0).reverse();
            const slice = sliceData(reverse, page, rowsPerPage);
            setSlice([...slice]);
        } catch (e) {
            setTableRange([])
            setSlice([])
        }
    }, [data, setTableRange, page, setSlice]); //eslint-disable-line

    return { slice, range: tableRange };
};

export default useTable;