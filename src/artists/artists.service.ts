import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schemas/artist.schema';

@Injectable()
export class ArtistService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}

  create(createArtistDto: CreateArtistDto) {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }

  findAll() {
    return this.artistModel.find().populate('songs').exec();
  }

  findOne(id: string) {
    return this.artistModel.findById(id).populate('songs').exec();
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.artistModel
      .findByIdAndUpdate(id, updateArtistDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.artistModel.findByIdAndDelete(id).exec();
  }
}
