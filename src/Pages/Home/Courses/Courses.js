import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoursesCard from './CoursesCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(0);
    const [pageNumber, setPageNumber] = useState()
    const size = 8;

    useEffect(() => {
        const run = async () => {
            const res = await fetch(`https://organic-food-server-siffahim.vercel.app/products?page=${page}&&size=${size}`)
            const data = await res.json()
            setCourses(data.result)
            const count = data.count;
            const pageCount = Math.ceil(count / size);
            setPageNumber(pageCount);
        }
        run()
    }, [page])
    return (
        <div className='px-5'>
            <Row className='gy-3'>
                {
                    courses.map(course => <CoursesCard
                        key={course._id}
                        course={course}
                    />)
                }
            </Row>
            <div className='text-center my-3'>
                {
                    [...Array(pageNumber).keys()].map(num => <button
                        className={num === page ? 'selectd' : ''}
                        style={{ border: 'none', padding: '4px 10px', fontWeight: 'bold', borderRadius: '3px', marginRight: '6px' }}
                        onClick={() => setPage(num)}
                    >{num + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Courses;