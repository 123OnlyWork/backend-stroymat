import { CategoryService } from 'src/category/category.service';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { GetAllProductDto } from './dto/get-all.product.dto';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    private paginationService;
    private categoryService;
    constructor(prisma: PrismaService, paginationService: PaginationService, categoryService: CategoryService);
    getAll(dto?: GetAllProductDto): Promise<{
        products: {
            id?: number;
            createdAt?: Date;
            updatedAt?: Date;
            name?: string;
            slug?: string;
            description?: string;
            price?: number;
            images?: string[];
            categoryId?: number;
            userId?: number;
            orderItems?: (import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                quantity: number;
                price: number;
                orderId: number;
                productId: number;
            }, unknown> & {})[];
            reviews?: (import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                rating: number;
                text: string;
                userId: number;
                productId: number;
            }, unknown> & {})[];
            category?: import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
            }, unknown> & {};
            user?: import("@prisma/client/runtime").GetResult<{
                id: number;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                password: string;
                isAdmin: boolean;
                name: string;
                avatarPath: string;
                phone: string;
            }, unknown> & {};
            _count?: {
                orderItems: number;
                reviews: number;
                category: number;
                user: number;
            };
        }[];
        length: number;
    }>;
    private createFilter;
    private getSortOption;
    private getSearchTermFilter;
    private getRatingFilter;
    private getPriceFilter;
    private getCategoryFilter;
    byId(id: number): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        userId?: number;
        orderItems?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }, unknown> & {})[];
        reviews?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }, unknown> & {})[];
        category?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        }, unknown> & {};
        user?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        }, unknown> & {};
        _count?: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }>;
    bySlug(slug: string): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        userId?: number;
        orderItems?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }, unknown> & {})[];
        reviews?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }, unknown> & {})[];
        category?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        }, unknown> & {};
        user?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        }, unknown> & {};
        _count?: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }>;
    byCategory(categorySlug: string): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        userId?: number;
        orderItems?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }, unknown> & {})[];
        reviews?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }, unknown> & {})[];
        category?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        }, unknown> & {};
        user?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        }, unknown> & {};
        _count?: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }[]>;
    getSimilar(id: number): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        description?: string;
        price?: number;
        images?: string[];
        categoryId?: number;
        userId?: number;
        orderItems?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        }, unknown> & {})[];
        reviews?: (import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            text: string;
            userId: number;
            productId: number;
        }, unknown> & {})[];
        category?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
        }, unknown> & {};
        user?: import("@prisma/client/runtime").GetResult<{
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        }, unknown> & {};
        _count?: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }[]>;
    create(): Promise<number>;
    update(id: number, dto: ProductDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
}
