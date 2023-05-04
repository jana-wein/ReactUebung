import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res);
                    if(!res.ok) {
                        throw Error ('could not fetch the date');
                    }
                    res.json().then(data => {
                        setBlogs(data);
                        setIsPending(false);
                    })     
                })
                
                .catch(err => {
                    console.log(err.message);
                })
        }, 1000)
    }, []);

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;