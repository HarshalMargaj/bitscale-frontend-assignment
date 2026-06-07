"use client";

import { Building2, Users, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/modal";
import FindPeopleModal from "../modals/findPeopleModal";

interface ActionButtonProps {
	icon: React.ReactNode;
	label: string;
	variant?: "outline" | "solid";
	onClick?: () => void;
}

const ActionButton = ({
	icon,
	label,
	variant = "outline",
	onClick,
}: ActionButtonProps) => {
	if (variant === "solid") {
		return (
			<button
				onClick={onClick}
				className="flex items-center gap-2 py-2 px-3 bg-button-primary text-button-primary-foreground text-sm font-medium rounded-sm cursor-pointer"
			>
				{icon}
				{label}
			</button>
		);
	}

	return (
		<button
			onClick={onClick}
			className="flex items-center gap-2 py-2 px-3 border border-border text-text-secondary text-xs font-medium rounded-[6px] cursor-pointer hover:bg-surface-subtle"
		>
			{icon}
			{label}
		</button>
	);
};

const SavedSearchButton = () => (
	<div className="flex items-center gap-1 text-xs text-text-heading border border-border rounded-md px-2.5 py-0.5  cursor-pointer font-medium h-5.5 bg-surface-subtle">
		<ChevronDown size={12} />
		Saved Search
	</div>
);

const DashboardHeader = () => {
	const [isFindPeopleOpen, setIsFindPeopleOpen] = useState(false);

	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="text-[18px] font-semibold text-text-primary">
					Welcome back, Tim!
				</h1>
				<p className="text-sm font-normal text-text-muted">
					Here's your daily scoop on Bitscale!
				</p>
			</div>

			<div className="flex items-center gap-3">
				<ActionButton
					icon={<Building2 size={14} className="text-text-credits" />}
					label="Find Companies"
					variant="outline"
				/>
				<ActionButton
					icon={<Users size={14} className="text-text-active" />}
					label="Find People"
					variant="outline"
					onClick={() => setIsFindPeopleOpen(true)}
				/>
				<ActionButton
					icon={<Plus size={16} />}
					label="New Grid"
					variant="solid"
				/>
			</div>
			<Modal
				isOpen={isFindPeopleOpen}
				onClose={() => setIsFindPeopleOpen(false)}
				title="Find People"
				headerExtra={<SavedSearchButton />}
				width={1025}
				height={718}
			>
				<FindPeopleModal />
			</Modal>
		</div>
	);
};

export default DashboardHeader;
