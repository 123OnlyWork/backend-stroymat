import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';
import { ReviewDto } from './review.dto';
export declare class ReviewService {
    private prisma;
    private productService;
    constructor(prisma: PrismaService, productService: ProductService);
    getAll(): Promise<{
        product?: import("@prisma/client/runtime").GetResult<{
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
        }, unknown> & {};
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        userId?: number;
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
        rating?: number;
        text?: string;
        productId?: number;
    }[]>;
    create(userId: number, dto: ReviewDto, productId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        text: string;
        userId: number;
        productId: number;
    }, unknown> & {}>;
    getAverageValueByProductId(productId: number): Promise<{
        rating: number;
    }>;
}
