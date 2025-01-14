'use client'

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

function Header() {
    const { user } = useUser();
  return (
      <div className="flex items-center justify-between p-5">
          {user && (
              <h1 className="text-2xl">
                  {user?.firstName}{`'s`} Space
              </h1>
          )}

          {/* Breadcrumbs */}
          <div>
              <SignedIn>
                  <UserButton />
              </SignedIn>

              <SignedOut>
                  <SignInButton />
              </SignedOut>
          </div>
    </div>
  )
}
export default Header