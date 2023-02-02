import { useRoutes } from "react-router-dom"
import "swiper/css/bundle"

import { routes } from "./routes"

const App = () => {
    return useRoutes(routes)
}

export default App
