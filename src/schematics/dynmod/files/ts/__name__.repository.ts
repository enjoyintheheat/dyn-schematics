import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { <%= classify(name) %>Entity } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.entity";

@EntityRepository(<%= classify(name) %>Entity)
export class <%= classify(name) %>Repository extends Repository<<%= classify(name) %>Entity> {}

