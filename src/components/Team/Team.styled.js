import styled from "styled-components";

const StyledTeam = styled.div`
  img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  p {
    color: #fff;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledTeam;
