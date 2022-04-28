import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import { RouteObject } from "./shared/types"
import Layout from "./components/Layout/Layout"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const LearnMore = lazy(() => import("./pages/LearnMore"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Blog = lazy(() => import("./pages/Blog"))
const Products = lazy(() => import("./pages/Products"))
const Login = lazy(() => import("./pages/auth/Login"))
const Register = lazy(() => import("./pages/auth/Register"))

export const routes: RouteObject[] = [
    {
        path: "/",
        label: "Home",
        element: <Layout />,
        children: [
            {
                index: true,
                label: "Home",
                element: <Home />
            },
            {
                path: "about",
                label: "About",
                element: <About />
            },
            {
                path: "knowledge-center",
                label: "Knowlege Center",
                element: <LearnMore />
            },
            {
                path: "blog",
                label: "Blog",
                element: <Blog />
            },
            {
                path: "products",
                label: "Products",
                element: <Products />,
                skipChildren: true,
                children: [
                    {
                        path: ":category"
                    }
                ]
            },
            {
                path: "login",
                label: "Login",
                element: <Login />
            },
            {
                path: "register",
                label: "Register",
                element: <Register />
            },
            {
                path: "*",
                label: "Not Found",
                element: <NotFound />
            }
        ]
    }
]

const App = () => {
    let element = useRoutes(routes)
    return element
}

export default App
