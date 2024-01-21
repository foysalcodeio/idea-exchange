import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


   const handleAddToBookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
    console.log('handleaddtobookmark click')
    
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // console.log('remove bookmark', id)
    const filterBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(filterBookmark)    
  }

  return (
    <div>
      <Header />
      <div className='md:flex max-7xl mx-auto'>
        <Cards handleAddToBookMark = {handleAddToBookMark} handleMarkAsRead = {handleMarkAsRead} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </div>
  )
}

export default App;
