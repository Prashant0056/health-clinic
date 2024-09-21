import { ThemeToggle } from "@/components/global/themeToggle";
import { ReactNode } from "react";

const LoginLayout=({children}:{children: ReactNode})=>{
    return(
        <>
        <div className="relative bg-background h-screen p-10">
            <div className="w-full flex justify-end absolute top-16 right-12 z-50">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </>
    )
}

export default LoginLayout;