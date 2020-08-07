import React, { FC } from 'react';
declare type Props = {
    isAdmin?: boolean;
    isCrew?: boolean;
    user: {
        displayName: string;
        avatar: string;
    };
    currentTenantName: string;
    tenantContent?: React.ReactNode;
    notificationLength: number;
    onClickLogo: () => void;
    onClickHelp: () => void;
    onClickNotification: () => void;
    onClickAccount: () => void;
    onClickLogout: () => void;
    onClickCrewList?: () => void;
    onClickNewCrew?: () => void;
    onClickBulkInsertCrews?: () => void;
    onClickBulkUpdateCrews?: () => void;
    onClickInviteCrew?: () => void;
    onClickProfile?: () => void;
    onClickCompany?: () => void;
    onClickSchool?: () => void;
    className?: string;
};
export declare const Header: FC<Props>;
export {};
