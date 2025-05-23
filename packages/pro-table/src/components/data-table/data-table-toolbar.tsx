import { Button } from "@poketto/ui/button";
import { cn } from "@poketto/ui/utils";
import type { Table } from "@tanstack/react-table";
import { RefreshCcw } from "lucide-react";
import type * as React from "react";

import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
	onRefresh?: () => void;
	isLoading?: boolean;
	toolbar?: React.ReactNode;
}

export function DataTableToolbar<TData>({
	table,
	onRefresh,
	isLoading,
	toolbar,
}: DataTableToolbarProps<TData>) {
	const handleRefresh = async () => {
		if (!onRefresh || isLoading) return;
		onRefresh();
	};

	return (
		<div className="flex items-center justify-between py-4">
			<div className="flex flex-1 items-center space-x-2">{toolbar}</div>
			<div className="flex items-center space-x-2">
				<DataTableViewOptions table={table} />

				<Button
					variant="outline"
					size="sm"
					onClick={handleRefresh}
					disabled={isLoading}
					className="size-8 p-0"
				>
					<RefreshCcw className={cn("size-4", isLoading && "animate-spin")} />
				</Button>
			</div>
		</div>
	);
}
