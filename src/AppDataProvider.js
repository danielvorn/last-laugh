import {createContext, useContext} from "react"
import {useQuery} from "react-query"

async function fetchPosts(subreddit) {
    const [, sub ] = subreddit.queryKey;
    const response = await fetch(`https://www.reddit.com/r/${sub}/top/.json?limit=20`)
    if (!response.ok) {
        throw new Error("Problem fetching posts")
    }
    return await response.json()
}

const AppData = createContext()

export function AppDataProvider({children}) {
    const { isLoading, error, data: posts } = useQuery(["posts", "ProgrammerHumor"], fetchPosts)
    return <AppData.Provider value={{isLoading, error, data: posts}}>{children}</AppData.Provider>
}

export const useAppData = () => useContext(AppData)
