import {Outlet, RouteObject, useNavigate} from "react-router-dom";
import {Home} from "../views/home";
import {Memo} from "../views/memo";

export const routes: RouteObject[] = [
    {
        path: '/',
        Component: () => {
            const navigate = useNavigate();
            const navs = [
                {
                    label: '首页',
                    onClick: () => {
                        navigate('/home');
                    }
                },
                {
                    label: 'memo',
                    onClick: () => {
                        navigate('/memo');
                    }
                }
            ]
            return <>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-start"
                }}>
                    <div style={{width: '50px'}}>
                        {
                            navs.map((item) => <div key={item.label} onClick={item.onClick}>{item.label}</div>)
                        }
                    </div>
                    <div style={{flex: 1}}>
                        <Outlet/>
                    </div>
                </div>
            </>
        },
        children: [
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'memo',
                element: <Memo/>
            }
        ]
    }
]