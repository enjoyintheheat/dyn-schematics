import { AbstractDto } from "@app/common/dto/abstractDto";
import { <%= classify(name) %>Entity } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.entity";

export class <%= classify(name) %>Dto extends AbstractDto {
    constructor(entity: <%= classify(name) %>Entity) {
        super(entity);
    }
}

