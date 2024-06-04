import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { last } from 'rxjs';

@Injectable()
export class ArtistService {
  create(createArtistDto: CreateArtistDto) {
    return createArtistDto;
  }

  findAll() {
    return [
      {
        id: 1,
        name1: 'Jhon',
        name2: 'Doe',
        lastName1: 'Doe',
        lastName2: 'Doe',
      },
      {
        id: 2,
        name1: 'Ana',
        name2: 'Maria',
        lastName1: 'Perez',
        lastName2: 'Perez',
      },
      {
        id: 3,
        name1: 'Pedro',
        name2: 'Jose',
        lastName1: 'Perez',
        lastName2: 'Perez',
      },
    ];
  }

  findOne(id: number) {
    return {
      id,
      name1: 'Jhon',
      name2: 'Doe',
      lastName1: 'Doe',
      lastName2: 'Doe',
    };
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    return {
      id,
      updateArtistDto,
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
