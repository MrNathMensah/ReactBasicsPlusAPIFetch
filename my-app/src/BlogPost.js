import BlogContent from "./BlogContent";
import Comment from "./Comment";



function BlogPost() {
    return (
        <div>
            <BlogContent articleTitle="The New Age" />
            
            <Comment articleContent="This article is very helpful"/>

        </div>
    )
}

export default BlogPost;