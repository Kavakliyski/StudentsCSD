// styles
import styled from "styled-components"

// auth0
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";


const Navigation = styled.nav`
    background-color: #1976d2;
    position: fixed;
    z-index: 2;

    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 18px;

    margin-left: 70px;

    box-shadow: 20px 0px 30px 1px black;

    .TextHolder {

        display: flex;
        gap: 25px;

        color: white;
        
        position: absolute;
        right: 0;
        padding: 0px 8vw 0px 0px;
    }

    @media (max-width: 768px) {
        .TextHolder {
            flex-direction: column;
            flex-wrap: wrap;
            gap: 0px;
            margin-left: 100px;
        }
    }
`

const LogoutButton = styled.button`
    cursor: pointer;

    font-size: 18px;

    background-color: white;
    width: 180px;
    height: auto;
    border: 0;

    color: #1976d2;

    border-radius: 8px;
`


export const Headernew = () => {

    const { user } = useUser();
    const router = useRouter()

    return (
        <header style={{ paddingBottom: '100px' }}>
            <Navigation>
                <div className="TextHolder">

                    Здравей, {user?.name}

                    <div className="ButtonHolder">
                        <LogoutButton onClick={() => router.push('/api/auth/logout')}>
                            ИЗЛИЗАНЕ
                        </LogoutButton>
                    </div>
                </div>
            </Navigation>
        </header>
    )
}
