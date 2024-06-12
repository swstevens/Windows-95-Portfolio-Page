declare interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

declare type DesktopWindows = {
    [key in string]: {
        zIndex: number;
        component: React.ReactElement;
        minimized: boolean;
    };
};