"use client";

import { Building2, Users, Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/modal";
import FindPeopleModal from "../modals/findPeopleModal";
import Button from "../ui/button";

const DashboardHeader = () => {
	const [isFindPeopleOpen, setIsFindPeopleOpen] = useState(false);

	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="text-[18px] font-semibold text-text-primary">
					Welcome back, Tim!
				</h1>
				<p className="text-sm font-normal text-text-muted">
					Here&apos;s your daily scoop on Bitscale!
				</p>
			</div>

			<div className="flex items-center gap-3">
				<Button
					variant="outline"
					className="text-xs rounded-[6px] py-2"
					onClick={() => {}}
				>
					<Building2 size={14} className="text-text-credits" />
					Find Companies
				</Button>

				<Button
					variant="outline"
					className="text-xs rounded-[6px] py-2"
					onClick={() => setIsFindPeopleOpen(true)}
				>
					<Users size={14} className="text-text-active" />
					Find People
				</Button>
				<Button variant="solid" className="rounded-sm py-2">
					<Plus size={16} />
					New Grid
				</Button>
			</div>
			<Modal
				isOpen={isFindPeopleOpen}
				onClose={() => setIsFindPeopleOpen(false)}
				title="Find People"
				width={1025}
				height={718}
			>
				<FindPeopleModal />
			</Modal>
		</div>
	);
};

export default DashboardHeader;
