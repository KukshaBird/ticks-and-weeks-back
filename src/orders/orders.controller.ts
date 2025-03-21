import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  allOrders() {
    return this.ordersService.findAll();
  }

  @Post(':pupilId')
  create(
    @Param('pupilId', ParseUUIDPipe) pupilId: string,
    @Body() body: CreateOrderDto,
  ) {
    return this.ordersService.create(pupilId, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.remove(id);
  }
}
