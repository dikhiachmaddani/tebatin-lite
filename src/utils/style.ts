import { CSSProperties } from "react";
import { customThemeColors } from "./theme";


export const blackButtonFullWidthStyle: CSSProperties = {
    width: '100%',
    backgroundColor: customThemeColors.neutral[80],
    color: "#fff",
    padding: 20
}

export const primaryButtonStyle: CSSProperties = {
    backgroundColor: customThemeColors.primary.main,
    color: "#fff",
    padding: 20
}

export const primaryButtonFullWidthStyle: CSSProperties = {
    width: '100%',
    backgroundColor: customThemeColors.primary.main,
    color: "#fff",
    padding: 20
}

export const dangerButtonFullWidthStyle: CSSProperties = {
    width: '100%',
    backgroundColor: customThemeColors.error.main,
    color: "#fff",
    padding: 20
}

export const dangerButtonStyle: CSSProperties = {
    backgroundColor: customThemeColors.error.main,
    color: "#fff",
    padding: 20
}

export const actionButtonStyle: CSSProperties = {
    borderRadius: 0,
    padding: 20,
    margin: 0,
    color: customThemeColors.primary.main,
    border: `1px solid ${customThemeColors.primary.main}`
}

export const primaryOutlineButtonFullWidthStyle: CSSProperties = {
    width: '100%',
    borderColor: `2px solid ${customThemeColors.primary.main}`,
    color: customThemeColors.primary.main,
    padding: 20
}

export const coverStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
    position: 'absolute',
    zIndex: 1
}

export const backgroundCoverStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: 0
}

// INFO: auth style
export const authLinkStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
    marginTop: 10,
    color: customThemeColors.neutral[60]
}
export const authDescriptionStyle: CSSProperties = {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
    marginTop: 10,
    color: customThemeColors.neutral[60]
}