import { useSelector } from "react-redux";
import { Container, TextContainer, Text, MainLink } from "./HomePage.styled";
import { selectUser } from "../../store/user/user.selectors";

export default function HomePage() {
  const user = useSelector(selectUser);

  return (
    <Container>
      <TextContainer>
        <Text>
          Hello, this is the SuperHero app. Here you can learn more about the
          biography, abilities of your favorite superheroes, as well as their
          worst enemies. Enter the name and learn more about the heroes, but
          first you need to register
        </Text>
        <MainLink to={user ? "search" : "auth"}>Start</MainLink>
      </TextContainer>
    </Container>
  );
}
