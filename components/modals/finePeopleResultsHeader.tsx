import { Lock, Search } from "lucide-react";

const FindPeopleResultsHeader = () => {
	return (
		<div className=" px-2 w-full space-y-1">
			<div className="flex justify-end">
				<div className="flex items-center gap-1.5 bg-[#FBECDD] px-3 py-1.5 rounded-[16px] h-5.5">
					<Search size={12} className="text-[#D9730E]" />
					<span className="text-xs font-medium text-[#D9730E]">
						8000/50000
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between w-full">
				<div className="text-xs font-medium text-[#4B5563]">
					Found 0 companies. Click preview to view results
				</div>
				<div className="flex items-center gap-1 text-xs font-semibold text-[#D97706]">
					<Lock size={12} className="text-[#D9730E]" />
					Unlock 100,000 leads with Enterprise Plan*
				</div>
			</div>
		</div>
	);
};

export default FindPeopleResultsHeader;
