import {Nav} from '../Nav/Nav'
import {AuthNav} from '../AuthNav/AuthNav'

export const AppBar =()=>{
    return (
        <header>
            <Nav/>
            <AuthNav/>
        </header>
    )
}