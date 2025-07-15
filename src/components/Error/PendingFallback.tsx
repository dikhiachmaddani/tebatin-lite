import { Spin } from "antd";
import { CSSProperties } from "react";
import { customThemeColors } from "../../utils/theme";


const blurLayoutStyle: CSSProperties = {
	backgroundColor: customThemeColors.neutral[10],
	position: "fixed",
	height: "100%",
	zIndex: 1,
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	opacity: 0.7,
};
const spinnerContainer: CSSProperties = {
	position: "fixed",
	display: "flex",
	flexDirection: "column",
	zIndex: 3,
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "100%",
};

export function PendingFallback() {
	return (
		<>
			<div style={blurLayoutStyle}></div>
			<div style={spinnerContainer}>
				<Spin size="large" />
			</div>
		</>
	);
}