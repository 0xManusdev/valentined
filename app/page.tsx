"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { valentineSteps } from "./utils";

export default function Home() {
	const [stepIndex, setStepIndex] = useState(0);
	const [accepted, setAccepted] = useState(false);

	useEffect(() => {
		valentineSteps.forEach((step) => {
			const img = new window.Image();
			img.src = step.gif;
		});
	}, []);

	const currentStep = valentineSteps[stepIndex];

	const yesScale = 1 + stepIndex * 0.08;
	const noScale = Math.max(0.5, 1 - stepIndex * 0.1);

	const handleNo = () => {
		if (stepIndex < valentineSteps.length - 1) {
			setStepIndex((prev) => prev + 1);
		} else {
			setStepIndex(0);
		}
	};

	const handleYes = () => {
		setAccepted(true);
	};

	return (
		<div className="flex min-h-dvh items-center justify-center bg-red-500 dark:bg-zinc-900 p-3 sm:p-6">
			<div className="flex gap-3 sm:gap-5 md:gap-8 flex-col items-center justify-center w-full max-w-md sm:max-w-lg md:max-w-3xl min-h-100 sm:min-h-112.5 md:min-h-125 p-4 sm:p-6 md:p-8 py-6 sm:py-8 bg-white dark:bg-zinc-800 rounded-2xl sm:rounded-3xl border-4 sm:border-6 md:border-8 border-gray-200 dark:border-zinc-700">
				{accepted ? (
					<div className="flex flex-col items-center gap-4 sm:gap-6 text-center px-2">
						<Image
							src="/5.gif"
							alt="Yay!"
							width={200}
							height={200}
							unoptimized
							className="rounded-lg w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64"
						/>
						<h1 className="text-xl sm:text-2xl font-bold font-pangolin text-gray-800 md:text-3xl">
							Yaaay !! Knew you would say YES!
						</h1>
					</div>
				) : (
					<div className="flex flex-col items-center gap-4 sm:gap-6 text-center px-2">
						<Image
							src={currentStep.gif}
							alt="Valentine gif"
							width={200}
							height={200}
							unoptimized
							className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64"
						/>

						<h1 className="text-lg sm:text-xl font-bold font-pangolin text-gray-800 md:text-2xl">
							{currentStep.text}
						</h1>

						<div className="flex items-center justify-center gap-4 sm:gap-6">
							<button
								onClick={handleYes}
								style={{ transform: `scale(${yesScale})` }}
								className="cursor-pointer rounded-xl border-4 font-pangolin border-white/18 bg-red-600 w-36 sm:w-44 md:w-48 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-red-700 text-center"
							>
								{currentStep.yesText || "Yes"}
							</button>

							{currentStep.noText && (
								<button
									onClick={handleNo}
									style={{ transform: `scale(${noScale})` }}
									className="cursor-pointer border-4 font-medium font-pangolin border-white/18 rounded-xl bg-pink-500 w-24 sm:w-28 md:w-32 py-1.5 sm:py-2 text-xs sm:text-sm text-white transition-all duration-300 hover:bg-pink-600 text-center whitespace-nowrap"
								>
									{currentStep.noText}
								</button>
							)}
						</div>
						<p className="text-xs font-pangolin text-gray-600 dark:text-gray-400 mt-1">
							Made with ❤️ by thecode
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
