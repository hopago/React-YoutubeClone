import styled from "styled-components"
import Card from "./Card";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Cards = ({ type }) => {

  return (
    <Container>
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
        <Card type={type} />
    </Container>
  )
}

export default Cards
