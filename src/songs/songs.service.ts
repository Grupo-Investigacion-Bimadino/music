import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song } from './schemas/song.schema';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}
  create(createSongDto: CreateSongDto) {
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  findAll() {
    return this.songModel.find().populate('lists').populate('artist').exec();
  }

  findOne(id: string) {
    return this.songModel.findById(id).exec();
  }

  update(id: string, updateSongDto: UpdateSongDto) {
    return this.songModel
      .findByIdAndUpdate(id, updateSongDto, {
        new: true,
      })
      .exec();
  }

  remove(id: string) {
    return this.songModel.findByIdAndDelete(id).exec();
  }
}
