import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  _id: mongoose.Types.ObjectId;

  @Prop({ type: String, required: true })
  nickname: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, default: 'No description' })
  description: string;

  @Prop({ type: String, default: 'No features' })
  picture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
