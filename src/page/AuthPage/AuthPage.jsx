import SingInForm from "../../components/sing-in-form/SingInForm";
import SingUpForm from "../../components/sing-up-form/SingUpForm";
import { Container } from "./AuthPage.styled";

export default function AuthPage() {
  return (
    <Container>
      <SingInForm />
      <SingUpForm />
    </Container>
  );
}
