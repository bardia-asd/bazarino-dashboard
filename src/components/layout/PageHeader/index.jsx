import { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import {
    Breadcrumbs,
    BreadcrumbsList,
    BreadcrumbsItem,
    BreadcrumbsLink,
    BreadcrumbsPage,
    BreadcrumbsSeparator,
} from "@/components/common/Breadcrumbs";
import { cn } from "@/utils/cn";

/**
 * Page header component.
 *
 * Displays the current page title, optional description,
 * breadcrumb navigation, and optional action buttons.
 *
 * Used as the top section of dashboard pages to provide
 * consistent page structure and navigation context.
 */
const PageHeader = ({ title, description, actions, className = "" }) => {
    // Generate breadcrumb items based on the current route.
    const breadcrumbs = useBreadcrumbs();

    return (
        <div
            className={cn(
                // Responsive layout:
                // Mobile: stacked content
                // Desktop: title section and actions side by side
                "flex flex-col md:flex-row md:items-end md:justify-between gap-3",
                className,
            )}>
            <div>
                {/* Breadcrumb navigation */}
                {breadcrumbs.length > 0 && (
                    <Breadcrumbs>
                        <BreadcrumbsList className="mb-2">
                            {breadcrumbs.map((item, index) => {
                                // The last breadcrumb represents the current page
                                // and should not be clickable.
                                const isLast = index === breadcrumbs.length - 1;

                                return (
                                    <Fragment key={item.href}>
                                        <BreadcrumbsItem className="text-xs">
                                            {isLast ? (
                                                // Current page breadcrumb
                                                <BreadcrumbsPage>
                                                    {item.label}
                                                </BreadcrumbsPage>
                                            ) : (
                                                // Previous pages remain clickable
                                                <BreadcrumbsLink asChild>
                                                    <Link to={item.href}>
                                                        {item.label}
                                                    </Link>
                                                </BreadcrumbsLink>
                                            )}
                                        </BreadcrumbsItem>

                                        {/* Separator between breadcrumb items */}
                                        {!isLast && <BreadcrumbsSeparator />}
                                    </Fragment>
                                );
                            })}
                        </BreadcrumbsList>
                    </Breadcrumbs>
                )}

                {/* Page title */}
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                    {title}
                </h1>

                {/* Optional page description */}
                {description && (
                    <p className="text-sm text-muted-foreground mt-1">
                        {description}
                    </p>
                )}
            </div>

            {/* Optional action buttons */}
            {actions && (
                <div className="flex items-center gap-2 flex-wrap">
                    {actions}
                </div>
            )}
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    actions: PropTypes.node,
    className: PropTypes.string,
};

export default PageHeader;
