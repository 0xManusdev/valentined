import type { Metadata } from "next";
import { Geist, Geist_Mono, Pangolin } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const pangolin = Pangolin({
	variable: "--font-pangolin",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "14 Fev",
	description: "Une question très importante...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${pangolin.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
