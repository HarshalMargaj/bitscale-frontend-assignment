"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	headerExtra: React.ReactNode;
	width: number;
	height: number;
}

const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	headerExtra,
	width,
	height,
}: ModalProps) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
			onClick={onClose}
		>
			<div
				className="relative bg-white rounded-lg shadow-xl  overflow-hidden p-8 space-y-6"
				style={{ width: `${width}px`, height: `${height}px` }}
				onClick={e => e.stopPropagation()}
			>
				<div className="flex items-center justify-between w-79.75">
					<h2 className="text-[18px] font-extrabold text-text-primary">
						{title}
					</h2>
					<div>{headerExtra}</div>
				</div>
				<button
					onClick={onClose}
					className="rounded-lg hover:bg-surface-subtle cursor-pointer text-icon-primary absolute right-2 top-2 bg-[#E5E7EB] h-4 w-4 flex items-center justify-center"
				>
					<X size={12} />
				</button>

				<div className="overflow-y-auto max-h-[calc(90vh-64px)]">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
