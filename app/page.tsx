import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import TopNav from "@/components/ui/TopNav";



const font =Poppins({
  subsets:["latin"],
  weight:["600"]
})



export default function Home() {
  return (
    

    <main className="flex h-full flex-col items-center justify-center bg-sky-700">
      <TopNav />
      <div className="space-y-6">
          <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
            font.className,
                            )}>Kayan Travels</h1>
        
        <p className="text-white text-lg text-center">111 Petunia Str,Zinniavilla-Rustenburg</p>

      </div>

      <div className="flex h-full flex-col items-center justify-center bg-sky-700">

        <LoginButton>
        <Button variant="secondary" size="lg">Sign In pls</Button>
        </LoginButton>
      </div>

    <p>All Right Reserved By kamrulhp@gmail.com--Tel:0651800800</p>
    </main>
  );
}
