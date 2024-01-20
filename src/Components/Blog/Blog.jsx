
const Blog = ({ blog }) => {
    console.log(blog)
    const {id, cover, title, author, author_img, posted_date, reading_time} = blog;
    return (
       <div className="mb-20 space-y-4 bg-blue-50">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                    
                </div>
            </div>
       </div>
    );
};

export default Blog;