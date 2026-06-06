"use client";

import { gridData } from "@/constants/tableData";
import { ArrowUp, ChevronDown, MoreHorizontal, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DashboardTable = () => {
	const [starred, setStarred] = useState<number[]>(
		gridData.filter(r => r.starred).map(r => r.id),
	);

	const toggleStar = (id: number) => {
		setStarred(prev =>
			prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id],
		);
	};

	return (
		<div className="w-full max-h-110 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
			<table className="w-full border-collapse">
				<thead>
					<tr className="border-b border-border">
						<th className="text-left py-3 text-xs font-medium text-text-secondary">
							<div className="flex items-center gap-1">
								Name <ArrowUp size={12} />
							</div>
						</th>
						<th className="text-left py-3 text-xs font-medium text-text-secondary w-48">
							Edited by
						</th>
						<th className="text-left py-3 text-xs font-medium text-text-secondary w-36">
							Last edited
						</th>
						<th className="text-left py-3 text-xs font-medium text-text-secondary w-20">
							Actions
						</th>
					</tr>
				</thead>

				<tbody>
					{gridData.map(row => (
						<tr
							key={row.id}
							className="border-b border-surface-subtle hover:bg-surface-subtle transition-colors group"
						>
							<td className="pr-4 py-1.5">
								<div className="flex items-center gap-2">
									{row.isGroup ? (
										<ChevronDown
											size={14}
											className="text-text-muted cursor-pointer shrink-0"
										/>
									) : (
										<div className="w-3.5 shrink-0" />
									)}
									<button
										onClick={() => toggleStar(row.id)}
										className="shrink-0"
									>
										<Star
											size={14}
											className={
												starred.includes(row.id)
													? " text-yellow-400"
													: "text-text-placeholder"
											}
										/>
									</button>
									<div className="space-x-8 flex items-center">
										<div
											className="w-5 h-5 flex items-center justify-center overflow-hidden shrink-0 border border-[#F1F1EF] rounded-sm"
											style={{
												boxShadow:
													"2px 2px 4px 0px rgba(0,0,0,0.04)",
											}}
										>
											<Image
												src={row.icon}
												alt={row.name}
												width={10}
												height={10}
												className="object-contain"
											/>
										</div>
										<span className="text-xs font-normal text-text-primary">
											{row.name}
										</span>
									</div>
								</div>
							</td>

							<td className="py-1.5">
								<div className="flex items-center gap-2">
									<Image
										src={row.editedBy.avatar}
										alt={row.editedBy.name}
										width={20}
										height={20}
										className="rounded-full shrink-0"
									/>
									<span className="text-xs font-normal text-text-primary">
										{row.editedBy.name}
									</span>
								</div>
							</td>

							<td className="py-1.5 text-xs font-normal text-text-primary">
								{row.lastEdited}
							</td>

							<td className="py-1.5">
								<button className="p-1 rounded hover:bg-surface-subtle cursor-pointer">
									<MoreHorizontal
										size={14}
										className="text-text-primary"
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
