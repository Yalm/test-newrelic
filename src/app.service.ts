import { Segment } from '@app/newrelic';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
import { addCustomSpanAttribute } from 'newrelic';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>
  ) { }

  @Segment()
  getHello() {
    addCustomSpanAttribute('message', 'estoy en getHello');
    return this.getText();
  }

  @Segment()
  async getText() {
    addCustomSpanAttribute('message', 'estoy en getText');
    ("".split('.')[0] as any).s.toString();
    return 'Hello World!';
  }

  @Segment()
  store(cat: CreateCatDto) {
    return this.catModel.create(cat);
  }
}
