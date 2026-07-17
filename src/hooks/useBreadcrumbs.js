import { useMatches } from "react-router";

const useBreadcrumbs = () => {
    const matches = useMatches();

    return matches
        .filter((match) => match.handle?.breadcrumb)
        .map((match) => ({
            label: match.handle.breadcrumb,
            href: match.pathname,
        }));
};

export { useBreadcrumbs };
