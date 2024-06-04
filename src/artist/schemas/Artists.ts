import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

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
}

export const ArtistsSchema = SchemaFactory.createForClass(Artist);
