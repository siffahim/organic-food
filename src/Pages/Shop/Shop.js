import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoursesCard from '../Home/Courses/CoursesCard';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Shop = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const run = async () => {
            const res = await fetch(`https://organic-food-server.onrender.com/courses`)
            const data = await res.json()
            setCourses(data.result)
        }
        run()
    }, [])
    return (
        <>
            <Navigation />
            <div className='px-4 mb-5'>
                <Row className='gy-3'>
                    {
                        courses.map(course => <CoursesCard
                            key={course._id}
                            course={course}
                        />)
                    }
                </Row>
            </div>
            <Footer />
        </>
    )
};

export default Shop;