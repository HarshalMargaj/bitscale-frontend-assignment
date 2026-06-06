import { Check, Circle, FileText } from "lucide-react";
import Image from "next/image";

const checklistItems = [
	{ id: 1, label: "Create your data list", done: true },
	{ id: 2, label: "Learn about BitAgent", done: true },
	{ id: 3, label: "Connect an integration", done: true },
	{ id: 4, label: "Customise waterfall providers", done: false },
];

const ProductDemoCard = () => {
	const completed = checklistItems.filter(i => i.done).length;
	const total = checklistItems.length;
	const percent = Math.round((completed / total) * 100);

	return (
		<div
			className="border border-border-card rounded-sm py-4 px-5 flex flex-col gap-4 h-41.5"
			style={{
				background: "linear-gradient(0deg, #FFFFFF 0%, #E7F3F8 100%)",
			}}
		>
			{/* Header */}
			<div className="flex items-center gap-3">
				<Image
					src="/Container.svg"
					alt="file-check"
					width={33}
					height={33}
				/>

				<div>
					<h3 className="text-sm font-medium text-text-emphasis">
						Complete product demo
					</h3>
					<p className="text-xs font-normal text-text-emphasis">
						92% of users nailed BitScale after this walkthrough
					</p>
				</div>
			</div>

			{/* Progress bar */}
			<div className="flex items-center gap-2">
				<div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
					<div
						className="h-full bg-text-credits rounded-full"
						style={{ width: `${percent}%` }}
					/>
				</div>
				<span className="text-xs font-medium text-text-credits">
					{percent}%
				</span>
			</div>

			{/* Checklist */}
			<div className="grid grid-cols-2 gap-2">
				{checklistItems.map(item => (
					<div key={item.id} className="flex items-center gap-2">
						{item.done ? (
							<div className="bg-[#347FA9] w-3.5 h-3.5 rounded-full flex items-center justify-center">
								<Check size={8} className="text-white" />
							</div>
						) : (
							<Circle
								size={14}
								className="text-[#D1D5DC] shrink-0"
							/>
						)}
						<span className="text-xs text-icon-secondary">
							{item.label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductDemoCard;
