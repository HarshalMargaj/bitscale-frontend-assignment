import Image from "next/image";
import React from "react";

const navbar = () => {
	return (
		<div className="border-b border-border-layout h-14 w-full flex items-center justify-between px-6">
			<div />
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-3 bg-[#EDF3EC] p-2 rounded-[10px] h-8.5">
					<div className="flex items-center gap-2 text-sm ">
						<Image
							src="/coins.00308be3 2.svg"
							alt="coin-icon"
							width={16}
							height={12}
						/>
						<div>
							<span className="text-text-credits text-sm font-medium">
								450000/5500000
							</span>
						</div>
					</div>

					<button className="bg-text-credits text-white text-xs font-medium px-3 py-1.5 rounded-sm h-5.5 flex items-center cursor-pointer">
						Booster Plan
					</button>
				</div>
				<Image
					src="https://randomuser.me/api/portraits/women/44.jpg"
					alt="user avatar"
					width={28}
					height={28}
					className="rounded-full cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default navbar;
