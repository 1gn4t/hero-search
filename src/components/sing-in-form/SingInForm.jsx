import { useNavigate } from "react-router";
import { singInGoogle, singInUser } from "../../API/firebase";
import {
  Container,
  FormContainer,
  Title,
  SubTitle,
  Label,
  Input,
  Button,
  GoogleButton,
  BtnContainer,
} from "./SingInForm.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signGoogleStart, signInStart } from "../../store/user/user.actions";

export default function SingInForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = ({ email, password }) => {
    dispatch(signInStart({ email, password }));
    reset();
    navigate("/");
  };

  const handlerGoogle = () => {
    dispatch(signGoogleStart());
    navigate("/");
  };

  return (
    <Container>
      <Title>I already have an acccount</Title>
      <SubTitle>Sign in with your email and password</SubTitle>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <Label>
          <Input
            {...register("email")}
            label="Email"
            type="email"
            required
            name="email"
            placeholder="Email"
          />
        </Label>
        <Label>
          <Input
            {...register("password")}
            label="Password"
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Label>
        <BtnContainer>
          <Button type="submit">Sing in</Button>
          <GoogleButton onClick={handlerGoogle} type="button">
            Google sing in
          </GoogleButton>
        </BtnContainer>
      </FormContainer>
    </Container>
  );
}
