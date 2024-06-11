import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Artist } from 'src/artist/schemas/Artist.schema';
import { Song } from 'src/songs/schemas/Song.schema';

@Schema({
  timestamps: true,
})
export class List extends Document {
  _id: mongoose.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, default: 'No description' })
  description: string;

  @Prop({ type: String, default: 'No features' })
  picture: string;

  @Prop({ type: String, default: 'No gender' })
  gender: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' })
  user: Artist;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Songs' })
  songs: Song[];
}

export const ListSchema = SchemaFactory.createForClass(List);
