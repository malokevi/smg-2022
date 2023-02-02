import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import type { Location } from "react-router-dom"

import { Container, Row, Col } from "../../../Grid"
import { routes } from "../../../../../routes"
import { RouteObject } from "../../../../../shared/types"
import { useHeaderContext } from "../.."

import * as S from './styles'

const OMITTED_ROUTES = ["/"]

const RecursiveBreadcrumb = ({
    location,
    routes
}: {
    location: Location
    routes: RouteObject[]
}): JSX.Element | null => {
    let Component: JSX.Element | null = <></>

    for (let i = 0; i < routes.length; i++) {
        const { path, children, label, skipChildren } = routes[i]
        const newPath = path && path === "/" ? "" : path
        const split = location.pathname.split("/")
        const match = newPath === "" || (newPath && split.includes(newPath))
        const skip =
            newPath &&
            skipChildren &&
            split.indexOf(newPath) === split.length - 1

        if (match) {
            Component = (
                <>
                    <li>
                        {split.indexOf(newPath) !== split.length - 1 ? (
                            <div className="link-slash">
                                <Link to={newPath}>{label}</Link>
                                <span>/</span>
                            </div>
                        ) : (
                            <p className="fade">{label}</p>
                        )}
                    </li>
                    {children &&
                        !skip &&
                        RecursiveBreadcrumb({
                            routes: children,
                            location
                        })}
                </>
            )
            break
        } else if (i === routes.length - 1 && !match) {
            Component = ["products"].includes(
                split[split.length - 2].toLowerCase()
            ) ? (
                <li className="fade">
                    {split[split.length - 1]
                        .replaceAll("-", " ")
                        .replaceAll("_", " ")}
                </li>
            ) : null
        }
    }

    return Component
}

export const Breadcrumb = () => {
    const { mobileNavIsOpen } = useHeaderContext()
    const location: Location = useLocation()

    return !OMITTED_ROUTES.includes(location.pathname) ? (
        <S.Breadcrumb isHiddenOnMobile={mobileNavIsOpen}>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <RecursiveBreadcrumb
                                routes={routes}
                                location={location}
                            />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </S.Breadcrumb>
    ) : null
}

