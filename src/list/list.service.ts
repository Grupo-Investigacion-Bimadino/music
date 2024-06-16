import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { List } from './schemas/list.schema';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel: Model<List>) {}

  create(createListDto: CreateListDto) {
    const createdList = new this.listModel(createListDto);
    return createdList.save();
  }

  findAll() {
    return this.listModel.find().populate('songs').populate('user').exec();
  }

  findOne(id: string) {
    return this.listModel
      .findById(id)
      .populate('songs')
      .populate('user')
      .exec();
  }

  findByUser(id: string) {
    let objectId;
    try {
      objectId = new Types.ObjectId(id);
    } catch (error) {
      throw new Error(`Invalid userId: ${id}`);
    }

    if (!Types.ObjectId.isValid(objectId)) {
      throw new Error(`Invalid user id: ${id}`);
    }
    return this.listModel
      .find({ user: id })
      .populate({
        path: 'songs',
        populate: {
          path: 'artists',
          model: 'Artist',
        },
      })
      .exec();
  }

  update(id: string, updateListDto: UpdateListDto) {
    return this.listModel
      .findByIdAndUpdate(id, updateListDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.listModel.findByIdAndDelete(id).exec();
  }
}
