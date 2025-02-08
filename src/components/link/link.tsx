import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
    page: string;
    children: React.ReactNode;
    className?: string;
}

function Link({ page, children, className }: LinkProps) {
    return (
        <RouterLink to={page} className={className}>
            {children}
        </RouterLink>
    );
}

export default Link;
