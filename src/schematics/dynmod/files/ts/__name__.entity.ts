import { Entity } from 'typeorm';

import { AbstractEntity } from "@app/common/abstract.entity";
import { <%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/<%= lowerCase(name) %>.dto";

@Entity({ name: '<%= lowerCase(name) %>s' })
export class <%= classify(name) %>Entity extends AbstractEntity<<%= classify(name) %>Dto> {
    dtoClass = <%= classify(name) %>Dto;
}
