import { lazy, Suspense } from "react"

import { RouteObject } from "./shared/types"
import { Layout } from "./components/Layout"
import { AuthFallback } from "./components/Fallback/AuthFallback"

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
const Contact = lazy(() => import("./pages/contact"))

const SuspendRoute = ({
    children,
    fallback = <></>
}: {
    children: React.ReactNode
    fallback?: React.ReactNode
}) => {
    // todo - add suspended route fallback component
    return <Suspense fallback={fallback}>{children}</Suspense>
}

export const routes: RouteObject[] = [
    {
        path: "/",
        label: "Home",
        element: <Layout />,
        children: [
            {
                index: true,
                label: "Home",
                element: (
                    <SuspendRoute>
                        <Home />
                    </SuspendRoute>
                )
            },
            {
                path: "about",
                label: "About",
                element: (
                    <SuspendRoute>
                        <About />
                    </SuspendRoute>
                )
            },
            {
                path: "contact",
                label: "Contact",
                element: (
                    <SuspendRoute>
                        <Contact />
                    </SuspendRoute>
                )
            },
            {
                path: "learn-more",
                label: "Knowlege Center",
                element: (
                    <SuspendRoute>
                        <KnowledgeCenter />
                    </SuspendRoute>
                ),
                children: [
                    {
                        path: ":section/:topic",
                        element: (
                            <SuspendRoute>
                                <KnowledgeCenter />
                            </SuspendRoute>
                        )
                    }
                ]
            },
            {
                path: "blog",
                label: "Blog",
                element: (
                    <SuspendRoute>
                        <BlogLayout />
                    </SuspendRoute>
                ),
                children: [
                    {
                        index: true,
                        label: "Blog",
                        element: (
                            <SuspendRoute>
                                <Blog />
                            </SuspendRoute>
                        )
                    },
                    {
                        path: ":article",
                        element: (
                            <SuspendRoute>
                                <BlogArticle />
                            </SuspendRoute>
                        )
                    }
                ]
            },
            {
                path: "products",
                label: "Products",
                element: (
                    <SuspendRoute>
                        <Products />
                    </SuspendRoute>
                ),
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
                element: (
                    <SuspendRoute fallback={<AuthFallback />}>
                        <Login />
                    </SuspendRoute>
                )
            },
            {
                path: "register",
                label: "Register",
                element: (
                    <SuspendRoute fallback={<AuthFallback />}>
                        <Register />
                    </SuspendRoute>
                )
            },
            {
                path: "*",
                label: "Not Found",
                element: (
                    <SuspendRoute>
                        <NotFound />
                    </SuspendRoute>
                )
            }
        ]
    }
]
