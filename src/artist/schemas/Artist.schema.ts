import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Song } from 'src/songs/schemas/Song.schema';

@Schema({
  timestamps: true,
})
export class Artist extends Document {
  @Prop()
  name1: string;

  @Prop()
  name2: string;

  @Prop()
  lastname1: string;

  @Prop()
  lastname2: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Song' })
  songs: Song[];
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
