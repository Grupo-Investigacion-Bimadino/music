import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { ArtistsSchema } from './schemas/Artists';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artists', schema: ArtistsSchema }]),
  ],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
