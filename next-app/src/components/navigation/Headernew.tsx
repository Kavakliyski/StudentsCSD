// styles
import styled from "styled-components"

// auth
import { useAuth } from "@/context/AuthContext"


const Navigation = styled.nav`
    background-color: #1976d2;
    position: fixed;
    z-index: 2;

    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: row;
    align-items: center;


    .TextHolder {

        display: flex;
        gap: 25px;

        font-size: 18px;
        color: white;
        
        position: absolute;
        right: 0;
        padding: 0px 8vw 0px 0px;
    }
`

const LogoutButton = styled.button`
    background-color: white;
    font-size: 18px;
    width: 180px;
    height: auto;
    border: 0;

    color: #1976d2;

    border-radius: 8px;
`

export const Headernew = () => {

    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    return (
        <header style={{ paddingBottom: '100px'}}>
            <Navigation>
                <div className="TextHolder">

                    Здравей, {user.email}

                    <div className="ButtonHolder">
                        <LogoutButton onClick={handleLogout}>
                            ИЗЛИЗАНЕ
                        </LogoutButton>
                    </div>
                </div>
            </Navigation>
        </header>
    )
}
