import { Button, Col, Row } from "react-bootstrap";


export function Jumbotron() {
    return (
        <Row>
            <Col>
                <h1>My own NextJS Template</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem ea, voluptates non reiciendis architecto. Ipsam eligendi architecto provident animi quisquam sint vitae, laudantium fugit corporis, odit eveniet aspernatur excepturi.</p>
                <Button variant='primary'>Click Here!</Button>
            </Col>
        </Row>
    )
}