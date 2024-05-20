import { CategoryDto } from './category.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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
    getBySlug(slug: string): Promise<{
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
    getById(id: string): Promise<{
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
    create(): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }, unknown> & {}>;
    update(id: string, dto: CategoryDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }, unknown> & {}>;
    delete(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }, unknown> & {}>;
}
