import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';



const Cards = ({ handleAddToBookmark, handleMarkAsRead  }) => {
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
                    handleAddToBookMark = {handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog> )
            }

        </div>

    );
};

Cards.prototype = {
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Cards;


