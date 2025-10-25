import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany
} from 'sequelize-typescript';
import { User } from './user';
import { Transaction } from './transaction';

@Table({
  tableName: 'accounts',
  timestamps: true
})
export class Account extends Model<Account> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  user_id!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  balance!: number;

  @ForeignKey(() => Account)
  @AllowNull(true)
  @Column(DataType.UUID)
  account_linked?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  type!: string;

  @BelongsTo(() => User)
  user?: User;

  @HasMany(() => Transaction)
  transactions?: Transaction[];
}
