import {
	ChevronRight,
	ChevronsLeftRight,
	ChevronUp,
	Rocket,
} from "lucide-react";
import Image from "next/image";
import { sidebarNav } from "@/constants/sidebarNav";

const sidebar = () => {
	return (
		<div className="w-56 shrink-0 h-screen border-r border-border-layout flex flex-col justify-between">
			<div>
				<div className="border-b border-border-layout  h-14 py-2 px-3 flex items-center">
					<Image
						src="/Bitscale_Logo light.svg"
						alt="Bitscale"
						width={186}
						height={22}
					/>
				</div>
				<div className="flex items-center h-13 border-b border-border-layout justify-between py-2 px-3">
					<div className=" flex items-center  gap-2">
						<div className="flex items-center">
							<div className="relative flex items-center">
								<Image
									src={
										"https://randomuser.me/api/portraits/women/68.jpg"
									}
									alt="user"
									width={24}
									height={24}
									className="rounded-full"
								/>
								<Image
									src={
										"https://randomuser.me/api/portraits/men/64.jpg"
									}
									alt="user"
									width={24}
									height={24}
									className="rounded-full -ml-4 z-10"
								/>
							</div>
						</div>
						<div className="text-text-secondary text-sm font-medium">
							GTM Spaces
						</div>
					</div>
					<ChevronsLeftRight
						className="rotate-90 text-text-muted"
						size={16}
					/>
				</div>
				<div className="flex flex-col gap-4 py-4 px-3">
					{sidebarNav.map(section => (
						<div
							key={section.section}
							className="flex flex-col gap-1"
						>
							<p className="text-xs text-text-muted font-medium px-2 mb-1">
								{section.section}
							</p>
							{section.items.map(item => (
								<div
									key={item.id}
									className={`flex items-center justify-between px-2 py-2 rounded-sm cursor-pointer
            ${item.active ? "bg-gray-100" : "hover:bg-gray-50"}`}
								>
									<div className="flex items-center gap-2">
										<item.icon
											size={16}
											className={
												item.active
													? "text-text-active"
													: item.badge
														? "text-text-placeholder"
														: "text-text-muted"
											}
										/>
										<span
											className={`text-sm font-medium
                ${
					item.active
						? "text-text-active"
						: item.badge
							? "text-text-placeholder font-normal"
							: "text-text-secondary font-normal"
				} `}
										>
											{item.name}
										</span>
									</div>

									{item.active && (
										<ChevronRight
											size={16}
											className="text-text-active"
										/>
									)}
									{item.badge === "rocket" && (
										<div className="bg-[#FBF3DB] py-1.5 rounded-md px-3">
											<Rocket
												size={12}
												className="text-[#CB912E]"
											/>
										</div>
									)}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="bg-surface-subtle px-3 py-4 flex flex-col m-2">
				<div className="flex items-center justify-between">
					<Image
						src="/Bitscale_Logo light.svg"
						alt="Bitscale"
						width={150}
						height={13}
					/>
					<div>
						<ChevronUp size={16} className="text-text-secondary" />
					</div>
				</div>
				<span className="text-xs font-medium text-[#4B5563]">
					Get Support at Bitscale
				</span>
			</div>
		</div>
	);
};

export default sidebar;
