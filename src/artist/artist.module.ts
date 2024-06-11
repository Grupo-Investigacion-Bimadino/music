import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { Artist, ArtistSchema } from './schemas/Artist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artist', schema: ArtistSchema }]),
  ],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
