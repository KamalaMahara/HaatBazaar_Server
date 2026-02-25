import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Category from './categoryModel.js';

@Table({
  tableName: 'products',
  modelName: 'Product',
  timestamps: true,
})
class Product extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName!: string;

  @Column(DataType.TEXT)
  productDescription!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  productPrice!: number;

  @Column(DataType.INTEGER)
  productTotalStock!: number;

  @Column(DataType.INTEGER)
  productDiscount!: number;

  @Column(DataType.STRING)
  productImageUrl!: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  categoryId!: string;

  @BelongsTo(() => Category)
  category!: Category;
}

export default Product;