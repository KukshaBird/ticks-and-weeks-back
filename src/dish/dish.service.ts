import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>,
  ) {}

  async create(createDishDto: CreateDishDto) {
    const dish = this.dishRepository.create(createDishDto);

    return this.dishRepository.save(dish);
  }

  findAll() {
    return this.dishRepository.find();
  }

  async findOne(id: string) {
    const dish = await this.dishRepository.findOne({ where: { id } });
    if (!dish) {
      throw new NotFoundException('dish not found');
    }

    return dish;
  }

  async update(id: string, updateDishDto: UpdateDishDto) {
    const dish = await this.dishRepository.findOne({ where: { id } });
    if (!dish) {
      throw new NotFoundException(`Dish with id ${id} not found`);
    }

    Object.assign(dish, updateDishDto);

    return await this.dishRepository.save(dish);
  }

  async remove(id: string) {
    const dish = await this.dishRepository.findOne({ where: { id } });
    if (dish) {
      await this.dishRepository.remove(dish);
    }
  }
}
