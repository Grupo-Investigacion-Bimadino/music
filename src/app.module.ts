import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './artist/artist.module';
import { SongsModule } from './songs/songs.module';
import { ListModule } from './list/list.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ArtistModule, SongsModule, ListModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
