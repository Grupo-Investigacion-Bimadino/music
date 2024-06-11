import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Artist } from 'src/artist/schemas/Artist.schema';

@Schema({
  timestamps: true,
})
export class Song extends Document {
  _id: mongoose.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, default: 'No album' })
  album: string;

  @Prop({ type: String, default: 'No year' })
  year: string;

  @Prop({ type: String, default: 'No url' })
  url: string;

  @Prop({ type: String, default: 'No description' })
  duration: string;

  @Prop({ type: String, default: 'No features' })
  picture: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' })
  artists: Artist[];
}

export const SongSchema = SchemaFactory.createForClass(Song);
