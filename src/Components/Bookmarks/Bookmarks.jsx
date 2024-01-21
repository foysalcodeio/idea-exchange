import PropTypes from 'prop-types'
import TaskList from '../TaskList/TaskList';

const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className='md:w-1/3 bg-gray-100 ml-10 mt-10 pt-2 rounded-md'>

            <div className='rounded-md bg-blue-200 text-center ring-2 ring-blue-400 flex'>
                <h2 className='place-items-center ml-10 font-semibold text-3xl text-blue-800 pt-6 mb-5'> Spend time on read  : {readingTime} </h2>
            </div>
            
           <div className='bg-gray-300 h-auto pt-3 flex'> 
            <h2 className='text-3xl text-center mt-2 mb-5 ml-20'> Mark as Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, id) => <TaskList id={id} bookmark={bookmark} ></TaskList> )
                }
           </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;