import {auth} from '../../firebase'
import { SignOutBtn } from './SignOutStyle'

const SignOut = () => {
  return auth.currentUser && (
    <SignOutBtn onClick={() => auth.signOut()}>Sign Out</SignOutBtn>
  )
}

export default SignOut