import React from "react"
import ReactDOM from "react-dom"
import {QueryClient, QueryClientProvider} from "react-query"
import {AppDataProvider} from "./AppDataProvider"
import App from "./App"
import "./index.css"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppDataProvider>
                <App/>
            </AppDataProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
