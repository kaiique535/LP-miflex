import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  tag: string;
  tagColor: string;
  bgColor: string;
  mlLink?: string;
  description?: string;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    image: { type: String, required: true },
    tag: { type: String, required: true },
    tagColor: { type: String, required: true },
    bgColor: { type: String, required: true },
    mlLink: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

// Formatação do JSON retornado
ProductSchema.set('toJSON', {
  transform: (doc, ret: Record<string, any>) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
