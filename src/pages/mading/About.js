import Information from "../../components/Information";
import Teams from "../../components/Teams";
import information from "../../components/utils/constants/information";
import team from "../../components/utils/constants/team";

function About() {
  return (
    <>
      <Information information={information} />
      <Teams team={team} />
    </>
  );
}

export default About;
