import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %>Repository } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.repository";
import { <%= classify(name) %>Controller } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.controller";
import { <%= classify(name) %>Service } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([<%= classify(name) %>Repository]),
	],
	controllers: [<%= classify(name) %>Controller],
	exports: [<%= classify(name) %>Service],
	providers: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module { }
