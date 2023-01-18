import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import "swiper/css/bundle"

import { RouteObject } from "./shared/types"
import Layout from "./components/Layout"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const KnowledgeCenter = lazy(() => import("./pages/KnowledgeCenter"))
const NotFound = lazy(() => import("./pages/NotFound"))
const BlogLayout = lazy(() => import("./pages/blog/BlogLayout"))
const Blog = lazy(() => import("./pages/blog/Blog"))
const BlogArticle = lazy(() => import("./pages/blog/BlogArticle"))
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
                element: <KnowledgeCenter />
            },
            {
                path: "blog",
                label: "Blog",
                element: <BlogLayout />,
                children: [
                    {
                        index: true,
                        label: "Blog",
                        element: <Blog />
                    },
                    {
                        path: ":article",
                        element: <BlogArticle />
                    }
                ]
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
