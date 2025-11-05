import type React from "react"
import { Crimson_Pro, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-display",
})

export const metadata = {
	title: "HobbyGrind - Precision Rotary Tools for Every Maker",
	description: "Expert reviews and guides for Dremel and rotary tools. Find the perfect precision tool for your craft.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${crimsonPro.variable} ${playfairDisplay.variable}`}>
			<body className="font-sans antialiased">
				<Header />
				{children}
			</body>
		</html>
	)
}
