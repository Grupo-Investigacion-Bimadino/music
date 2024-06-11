import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Song, SongSchema } from './schemas/Song.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
