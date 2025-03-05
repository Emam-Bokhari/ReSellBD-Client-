export type TProduct = {
    _id: string;
    title: string;
    description: string;
    price: number;
    condition: 'new' | 'likeNew' | 'used' | 'refurbished';
    images: string[];
    userID?: string;
    status?: 'available' | 'sold';
    category:
    | 'mobiles'
    | 'electronics'
    | 'vehicles'
    | 'property'
    | 'home'
    | 'pets'
    | 'cloths'
    | 'sports';
    brand?: string;
    location: string;
    negotiable?: 'yes' | 'no';
    warranty?: string;
    contactNumber?: string;
    isDeleted?: false;
    createdAt: string;
    updatedAt: string;
};