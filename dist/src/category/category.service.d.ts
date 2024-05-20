import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        _count?: {
            products: number;
        };
        products?: (import("@prisma/client/runtime").GetResult<{
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
    bySlug(slug: string): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        _count?: {
            products: number;
        };
        products?: (import("@prisma/client/runtime").GetResult<{
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
    getAll(): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        _count?: {
            products: number;
        };
        products?: (import("@prisma/client/runtime").GetResult<{
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
    }[]>;
    create(): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }, unknown> & {}>;
    update(id: number, dto: CategoryDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }, unknown> & {}>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }, unknown> & {}>;
}
