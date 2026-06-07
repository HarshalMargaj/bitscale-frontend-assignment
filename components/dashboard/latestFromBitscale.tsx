import { Play } from "lucide-react";
import Image from "next/image";

const LatestFromBitscale = () => {
	return (
		<div className="bg-surface-info  rounded-sm py-4 px-5 flex flex-col gap-4 h-41.5">
			<div className="flex items-center justify-between">
				<h2 className="text-sm font-medium text-primary-soft">
					Latest from Bitscale
				</h2>
				<div className="flex items-center gap-1">
					<div className="w-6 h-1.5 bg-primary-soft rounded-full" />
					<div className="w-1.5 h-1.5 bg-[#8DBAD0] rounded-full" />
					<div className="w-1.5 h-1.5 bg-[#8DBAD0] rounded-full" />
					<div className="w-1.5 h-1.5 bg-[#8DBAD0] rounded-full" />
				</div>
			</div>

			<div className="flex gap-3">
				<div className="relative w-36 h-24 rounded-[10px] overflow-hidden shrink-0 bg-gray-200">
					<Image
						src="https://img.youtube.com/vi/NTfPtYJORck/hqdefault.jpg"
						alt="video thumbnail"
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="bg-white rounded-full p-2 shadow">
							<Play
								size={14}
								className="text-text-primary fill-text-primary"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<h3 className="text-[13px] font-medium text-text-secondary">
						How to Integrate 2 Way HubSpot
					</h3>
					<p className="text-xs text-text-muted line-clamp-3 font-normal">
						Prerequisites for this Integration is that you should
						have a HubSpot account and Copy the API key. We simple
						add our API key through the integrations pa...
					</p>
					<span className="text-xs text-text-placeholder mt-auto">
						Posted today
					</span>
				</div>
			</div>
		</div>
	);
};

export default LatestFromBitscale;
