import {memo} from "react";
import {useAppData} from "./AppDataProvider"
import Spinner from "./components/Spinner";
import PostContainer from "./components/PostContainer"

const App = memo(() => {
    const sortByDescendingComments = arr => {
        return arr.data.children.sort((a, b) => b.data.num_comments - a.data.num_comments)
    }

    const {isLoading, error, data: posts} = useAppData()

    if (isLoading) return <Spinner/>

    if (error) return "An error has occurred: " + error.message

    if (posts) {
        const sortedPosts = sortByDescendingComments(posts)
        return (
            <div className="App">
                <div className="content">
                    <div>{sortedPosts.map(post =>
                        <PostContainer key={post.data.id} post={post.data}/>
                    )}</div>
                </div>
            </div>
        )
    }
})

export default App

