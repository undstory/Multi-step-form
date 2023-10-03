import { ComponentType, useLayoutEffect, useState } from "react";
import { BREAKPOINT_DESKTOP_L, BREAKPOINT_DESKTOP_M, BREAKPOINT_DESKTOP_S, BREAKPOINT_TABLET } from "../themes/media";

const defaultMediaQueries = {
    mediaIsDesktop: false,
    mediaIsDesktopL: false,
    mediaIsDesktopM: false,
    mediaIsDesktopS: false,
    mediaIsDesktopXl: false,
    mediaIsLandscape: false,
    mediaIsLaptop: false,
    mediaIsPhone: false,
    mediaIsPortrait: false,
    mediaIsTablet: false
};

export function withMediaQueries<T>(Component: ComponentType<T>) {
    return (props: T) => {
        const [mediaQueries, setMediaQueries] = useState(defaultMediaQueries);
        useLayoutEffect(() => {
            function updateSize() {
                const isPhone = window.innerWidth < BREAKPOINT_TABLET;
                const isTablet =
                    window.innerWidth >= BREAKPOINT_TABLET &&
                    window.innerWidth < BREAKPOINT_DESKTOP_S
                setMediaQueries({
                    ...mediaQueries,
                    mediaIsDesktop: window.innerWidth >= BREAKPOINT_DESKTOP_S,
                    mediaIsDesktopL:
                        window.innerWidth >= BREAKPOINT_DESKTOP_L,
                    mediaIsDesktopM:
                        window.innerWidth >= BREAKPOINT_DESKTOP_M &&
                        window.innerWidth < BREAKPOINT_DESKTOP_L,
                    mediaIsDesktopS:
                        window.innerWidth >= BREAKPOINT_DESKTOP_S &&
                        window.innerWidth < BREAKPOINT_DESKTOP_M,
                    mediaIsPhone: isPhone,
                    mediaIsTablet: isTablet
                });
            }

            window.addEventListener('resize', updateSize);
            updateSize();

            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return <Component {...props} {...mediaQueries} />;
    };
}
