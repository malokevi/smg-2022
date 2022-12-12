import { DragEvent } from "react"
import { useCallback, useState, useRef } from "react"
import styled from "styled-components"
import { buttonReset } from "../theme/mixins/resets"
import { Col, Container, Row } from "./Layout/Grid"

const Carousel = ({ slides }: { slides: (() => JSX.Element)[] }) => {
    const [active, setActive] = useState(0)
    const dragVal = useRef<number | undefined>(undefined)

    const changeSlide = useCallback(
        (val: number) => {
            const length = slides.length - 1

            if (val > length) {
                return 0
            } else if (val < 0) {
                return length
            }

            return val
        },
        [slides]
    )

    // Handle Drag Events
    const handleDragStart = (e: DragEvent) => {
        var img = document.createElement("img")
        img.src = ""
        e.dataTransfer.setDragImage(img, 0, 0)

        dragVal.current = e.clientX
    }

    const handleDragEnd = (e: DragEvent) => {
        if (typeof dragVal.current === "number") {
            if (e.clientX < dragVal.current) {
                setActive(changeSlide(active + 1))
            } else if (e.clientX > dragVal.current) {
                setActive(changeSlide(active - 1))
            }
        }

        dragVal.current = undefined
    }

    return (
        <StyledCarousel
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            draggable="true"
        >
            {slides.map((component, index) => {
                return index === active ? (
                    <Slide draggable="false" key={`heroslide-${index}`}>
                        {component()}
                    </Slide>
                ) : undefined
            })}

            <StyledButtonContainer>
                <Row>
                    <Col className="flex-col">
                        <button
                            className="left"
                            onClick={() => setActive(changeSlide(active - 1))}
                        >
                            &#10094;
                        </button>
                        <button
                            className="right"
                            onClick={() => setActive(changeSlide(active + 1))}
                        >
                            &#10095;
                        </button>
                    </Col>
                </Row>
            </StyledButtonContainer>
        </StyledCarousel>
    )
}

const StyledButtonContainer = styled(Container)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;

    .flex-col {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
`

const StyledCarousel = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    position: relative;
    cursor: move;
    cursor: grab;

    &:active {
        cursor: grab;
        cursor: grabbing; // todo - what is going on here? repeats
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }

    button {
        &.left,
        &.right {
            ${buttonReset}
            bottom: 20px;
            font-size: 32px;
            line-height: 1;
        }
    }
`

const Slide = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 2;
`

export default Carousel
