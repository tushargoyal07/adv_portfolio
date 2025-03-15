"use client"

import { useEffect } from "react"

export function HiddenSignature() {
  useEffect(() => {
    // Add a hidden comment in the HTML
    const comment = document.createComment(" Designed with ♥ by Tushar Goyal - 2025 ")
    document.documentElement.appendChild(comment)

    // Add a hidden signature in the console when pressing a specific key combination
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Alt + T
      if (e.ctrlKey && e.altKey && e.key === "t") {
        console.log(
          "%c Designed and Developed by Tushar Goyal for Rakesh Associates ",
          "background: #2F4858; color: white; padding: 5px; border-radius: 3px; font-weight: bold;",
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}

