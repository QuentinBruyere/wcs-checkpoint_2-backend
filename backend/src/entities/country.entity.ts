import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export default class Country {
	@Field()
	@PrimaryGeneratedColumn()
	id: number;

	@Field({nullable: true})
	@Column()
	code: string;

	@Field({nullable: true})
	@Column()
	name: string;

	@Field({nullable: true})
	@Column()
	emoji: string;

	@Field({nullable: true})
	@Column()
	continent: string;
}

@InputType()
export class CreateCountryInput {
	@Field({nullable: true})
	code: string
	@Field({nullable: true})
	name: string
	@Field({nullable: true})
	emoji: string
	@Field({nullable: true})
	continent: string
}