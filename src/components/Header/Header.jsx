
import { Header, Segment} from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function PageHeader({ user, handleLogout}){
    return (
        <Segment>
            <Header as='h2' >
              Welcome to musicMAKES!
              <Link to="" onClick={handleLogout}></Link>
            </Header>
        </Segment>
    )
}