"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePathname } from "next/navigation"

interface DisclaimerModalProps {
  pathname?: string
}

export function DisclaimerModal({ pathname }: DisclaimerModalProps) {
  const [open, setOpen] = useState(false)
  const currentPathname = usePathname()

  useEffect(() => {
    // Show disclaimer on every page/section load
    setOpen(true)
  }, [currentPathname]) // Trigger on pathname change

  const handleAccept = () => {
    setOpen(false)
  }

  const handleDecline = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Disclaimer</DialogTitle>
          <DialogDescription>
            The Bar Council of India does not permit the solicitation of work and advertising by legal
            practitioners/advocates. By accessing our website, the user acknowledges that:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p>
            The user wishes to gain more information about us for his/her information and use. He/she also acknowledges
            that there has been no attempt by us to advertise or solicit work.
          </p>
          <p>
            Any information obtained or downloaded by the user from our website does not lead to the creation of the
            Advocate – Client relationship between our Law Firm and the User.
          </p>
          <p>None of the information contained in our website amounts to any form of legal opinion or legal advice.</p>
          <p>
            Our website uses cookies to improve your user experience. By using our site, you agree to our use of
            cookies. To find out more, please see our Cookies Policy & Privacy Policy.
          </p>
        </div>
        <DialogFooter className="flex sm:justify-between">
          <Button type="button" variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button type="button" onClick={handleAccept}>
            Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
