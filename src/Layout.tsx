

import { Outlet } from 'react-router'
import { Toaster } from "sonner"
function Layout() {


  return (
    <>

 <html lang="en" suppressHydrationWarning>
      <body>
        
    <Outlet key={location.pathname}/>
    <Toaster theme="dark" position="top-right" />
      </body>
    </html>
  
      
    </>
  )
}

export default Layout