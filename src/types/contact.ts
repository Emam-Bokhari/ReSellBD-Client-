export type TContact = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
    services?: string[];
    isDeleted?: boolean;
    createdAt: string;
    updatedAt: string;
};