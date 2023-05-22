import {Nav} from '../Nav/Nav'
import {AuthNav} from '../AuthNav/AuthNav'
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';

export const AppBar =()=>{
    const { isLoggedIn } = useAuth();
    return (
        <header>
            <Nav/>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}