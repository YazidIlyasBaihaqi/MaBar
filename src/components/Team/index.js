import StyledTeam from "./Team.styled";

function Team(props) {
  const { team } = props;

  return (
    <StyledTeam>
      <div>
        <img src="https://picsum.photos/id/1005/200" alt="avatar" />
        <p>{team}</p>
      </div>
    </StyledTeam>
  );
}

export default Team;
