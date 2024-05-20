import { ReviewDto } from './review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
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
    leaveReview(id: number, dto: ReviewDto, productId: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        text: string;
        userId: number;
        productId: number;
    }, unknown> & {}>;
    getAverageByProduct(productId: string): Promise<{
        rating: number;
    }>;
}
