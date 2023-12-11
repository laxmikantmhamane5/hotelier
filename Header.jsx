import { Alert, Container } from "react-bootstrap";

export function Header(props){
    return (
        <Container className="mt-1">
            <Alert variant="info">
                <h5>{props.text}</h5>
            </Alert>
        </Container>
    );
}