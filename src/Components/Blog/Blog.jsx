import PropType from 'prop-types'
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const {id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
       <div className="mb-20 space-y-4 bg-green-50 h-auto rounded-3xl ring-2 ring-green-200">
            <img className="w-full mb-8 rounded-3xl" src={cover} alt={`Cover picture of the title ${title}`} />
            
            <div className="flex justify-between mb-6 p-3">
                <div className="flex">
                    <img className="w-14 h-14 p-2 rounded-full ring-2 ring-gray-300 dark:ring-gray-800" src={author_img} alt="Bordered avatar" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span> {reading_time} min read </span>
                    <button className='ml-2 text-2xl text-red-500' ><FaBookmark></FaBookmark></button>
                </div>
            </div>

         <div className='text-justify p-3'>
         <h2 className='text-4xl font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, id) => <span key={id}> <a href="">#{hash}</a> </span> )
                }
            </p>
            <button className='text-purple-800 font-bold underline' > Mark as Read</button>
         </div>
       </div>
    );
};

Blog.PropType = {
    blog: PropType.object.isRequired,
}

export default Blog;