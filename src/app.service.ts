import { CaptureError, Segment } from '@app/newrelic';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
import { addCustomSpanAttribute } from 'newrelic';
import { WinstonLogger } from '@app/logger';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    private readonly logger: WinstonLogger,
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>
  ) { 
    this.logger.setContext(AppService.name);
  }

  @Segment()
  @CaptureError() 
  getHello() {
    this.logger.debug('About to return cats!');
    /*     addCustomSpanAttribute('message', 'estoy en getHello'); */
    return this.getText();
  }

  @Segment()
  @CaptureError()
  async getText() {
    /*     throw new NotFoundException(); */
    /*     addCustomSpanAttribute('message', 'estoy en getText'); */
    ("".split('.')[0] as any).s.toString();
    return 'Hello World!';
  }

  @Segment()
  @CaptureError()
  store(cat: CreateCatDto) {
    return this.catModel.create(cat);
  }
}
