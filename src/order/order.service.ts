import { Injectable } from '@nestjs/common'
import { EnumOrderStatus } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { productReturnObject } from 'src/product/return-product.object'
import { OrderDto } from './order.dto'
import { PaymentStatusDto } from './payment-status.dto'



@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: number) {
		return this.prisma.order.findMany({
			where: {
				userId
			},
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				items: {
					include: {
						product: {
							select: productReturnObject
						}
					}
				}
			}
		})
	}

	async placeOrder(dto: OrderDto, userId: number) {
		const total = dto.items.reduce((acc, item) => {
			return acc + item.price * item.quantity
		}, 0)

		const order = await this.prisma.order.create({
			data: {
				status: dto.status,
				items: {
					create: dto.items
				},
				total,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})

	}
}
