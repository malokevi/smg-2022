import { Link } from "react-router-dom"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import type { Location } from "react-router-dom"

import { Container, Row, Col } from "../Grid"
import { routes } from "../../../App"
import { RouteObject } from "../../../shared/types"

const OMITTED_ROUTES = ["/"]

const RecusriveBreadcrumb = ({
    location,
    routes
}: {
    location: Location
    routes: RouteObject[]
}) => {
    let Component = <></>

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
                        RecusriveBreadcrumb({
                            routes: children,
                            location
                        })}
                </>
            )
            break
        } else if (i === routes.length - 1 && !match) {
            //if route accepts parameters, show parameter as current
            Component = (
                <li className="fade">
                    {["products"].includes(
                        split[split.length - 2].toLowerCase()
                    )
                        ? split[split.length - 1]
                              .replaceAll("-", " ")
                              .replaceAll("_", " ")
                        : "Not found"}
                </li>
            )
        }
    }

    return Component
}

const Breadcrumb = () => {
    const location: Location = useLocation()

    return !OMITTED_ROUTES.includes(location.pathname) ? (
        <StyledBreadcrumb>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <RecusriveBreadcrumb
                                routes={routes}
                                location={location}
                            />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </StyledBreadcrumb>
    ) : null
}

const StyledBreadcrumb = styled.div`
    padding: 24px 0;
    ul {
        display: flex;
        flex-flow: row nowrap;
        gap: 24px;
        list-style: none;
        padding: 0;

        li,
        p,
        span {
            font-size: ${({ theme }) => theme.fontSize.xs};
            text-transform: capitalize;
        }

        .fade {
            opacity: 0.7;
        }

        li {
            .link-slash {
                display: flex;
                flex-flow: row nowrap;
                gap: 24px;
            }
        }
    }
`

export default Breadcrumb
