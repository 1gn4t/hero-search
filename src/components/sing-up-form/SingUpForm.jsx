import {
  Container,
  FormContainer,
  Title,
  SubTitle,
  Label,
  Input,
  Button,
  BtnContainer,
} from "./SingUpForm.styled";
import { createUser } from "../../API/firebase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.actions";

export default function SingUpForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = ({ email, password }) => {
    console.log({ email, password });
    dispatch(signUpStart({ email, password }));
    reset();
    navigate("/");
  };

  return (
    <Container>
      <Title>{"Don't have an acccount?"}</Title>
      <SubTitle>Sign up with your email and password</SubTitle>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <Label>
          <Input
            label="Name"
            type="name"
            required
            name="name"
            placeholder="Name"
          />
        </Label>
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
          <Button type="submit">Sing up</Button>
        </BtnContainer>
      </FormContainer>
    </Container>
  );
}
