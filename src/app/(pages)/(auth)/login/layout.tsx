import { ReactNode } from "react";

const LoginLayout=({children}:{children: ReactNode})=>{
    return(
        <>
        <div className="bg-white h-screen p-10">
            {children}
        </div>
        </>
    )
}

export default LoginLayout;