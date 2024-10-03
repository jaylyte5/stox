import { Home, Info, Newspaper, Settings, Users } from "lucide-react"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // <ClerkProvider>
        <html lang="en" >
            <body className="flex h-screen">
                {/* Start Side Navigation Menu */}
                <div className="py-2 m-12 rounded-full bg-orange-100 drop-shadow-md shadow-md flex items-center ">
                    <ul className="p-4 flex flex-col items-center gap-12 ">
                        <a href="/app">
                            <Home className="side-nav-item" width={40} height={40} />
                        </a>
                        <a href="/app/social">
                            <Users className="side-nav-item" width={40} height={40} />
                        </a>
                        <a href="/app/news">
                            <Newspaper className="side-nav-item" width={40} height={40} />
                        </a>
                        <a href="/app/info">
                            <Info className="side-nav-item" width={40} height={40} />
                        </a>
                        <a href="/app/settings">
                            <Settings className="side-nav-item" width={40} height={40} />
                        </a>
                    </ul >
                </div >
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </body >
        </html >
        // </ClerkProvider>
    )
}
