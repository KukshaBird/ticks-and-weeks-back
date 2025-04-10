import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePupilDto } from './dto/create-pupil.dto';
import { UpdatePupilDto } from './dto/update-pupil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pupil } from './entities/pupil.entity';
import { Balance } from './entities/balance.entity';

@Injectable()
export class PupilsService {
  constructor(
    @InjectRepository(Pupil)
    private readonly pupilsRepository: Repository<Pupil>,
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>,
  ) {}

  async create(createPupilDto: CreatePupilDto) {
    const { balance, ...pupilData } = createPupilDto;
    const pupil = this.pupilsRepository.create({
      ...pupilData,
      balance: this.balanceRepository.create(balance),
    });

    return await this.pupilsRepository.save(pupil);
  }

  async findAll() {
    return await this.pupilsRepository.find({
      relations: ['orders'],
      order: { name: 'ASC' },
    });
  }

  async findOne(id: string) {
    const pupil = await this.pupilsRepository.findOne({ where: { id } });
    if (!pupil) {
      throw new NotFoundException('Pupil not found');
    }
    return pupil;
  }

  async update(id: string, updatePupilDto: UpdatePupilDto) {
    const pupil = await this.pupilsRepository.findOne({ where: { id } });
    if (!pupil) {
      throw new NotFoundException('Pupil not found');
    }

    Object.assign(pupil, updatePupilDto);

    return this.pupilsRepository.save(pupil);
  }

  async remove(id: string) {
    const pupil = await this.pupilsRepository.findOne({ where: { id } });
    if (!pupil) {
      throw new NotFoundException('Pupil not found');
    }
    return await this.pupilsRepository.remove(pupil);
  }
}
