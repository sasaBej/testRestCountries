import { StyledCard } from "./styles/Card.styles";

export default function Card(props) {
  return (
    <StyledCard>
      <img src={props.flags.svg} alt="flag" />

      <div>
        <h3>Name: {props.name.common}</h3>
        <span>Capital: {props.capital}</span>
        <span>Region: {props.region}</span>
        <span>Population: {props.population}</span>
      </div>
    </StyledCard>
  );
}
