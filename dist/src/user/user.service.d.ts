import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number, selectObject?: Prisma.UserSelect): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        reviews?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }, unknown> & {})[];
        _count?: {
            orders: number;
            reviews: number;
            favorites: number;
        };
        email?: string;
        password?: string;
        isAdmin?: boolean;
        avatarPath?: string;
        phone?: string;
        orders?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").EnumOrderStatus;
            total: number;
            userId: number;
        }, unknown> & {})[];
        favorites: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string;
            price: number;
            images: string[];
            categoryId: number;
            userId: number;
        }, unknown> & {})[];
    }>;
    updateProfile(id: number, dto: UserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
        avatarPath: string;
        phone: string;
    }, unknown> & {}>;
    toggleFavorite(userId: number, productId: number): Promise<{
        message: string;
    }>;
}
