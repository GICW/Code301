import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Auth/AuthButtons';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Profile from './Profile';
import Content from './Content';

function App(props) {
    return(
      <>
        <div>
          Login or Logout with one component <AuthButtons />
        </div>

        <div>
          Login with a standalone component <Login />
        </div>

        <div>
          Logout with a standalone component <Logout />
        </div>

        {props.auth0.isAuthenticated &&
          <>
            <Profile />
            <Content />
          </>
        }
      </>
    )
  }

export default withAuth0(App);
