import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { PupilsService } from '../pupils/pupils.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly pupilsService: PupilsService,
  ) {}

  async findAll() {
    return this.orderRepository.find();
  }

  async create(pupilId: string, orderData: CreateOrderDto) {
    const pupil = await this.pupilsService.findOne(pupilId);

    const order = this.orderRepository.create({
      ...orderData,
      pupil: pupil,
    });

    return await this.orderRepository.save(order);
  }

  async remove(id: string) {
    const order = await this.orderRepository.findOne({ where: { id } });

    if (!order) throw new NotFoundException(`Order with id ${id} not found`);

    return await this.orderRepository.remove(order);
  }
}
