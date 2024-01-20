import { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import Blog from '../Blog/Blog';

const Cards = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-3xl'>Blogs : {info.length}</h1>
            {
                info.map( blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog> )
            }

        </div>

    );
};

export default Cards;


