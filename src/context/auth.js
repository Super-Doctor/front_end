import { useContext } from "react";
import { When } from "react-if";
import { LoginContext } from './login'

export default function Auth(props) {
  const context = useContext(LoginContext);

  const canDo = context.can(props.capability);
  console.log(canDo);

  return <When condition={context.loggedIn && canDo}>{props.children}</When>;
}