import { Injectable } from '@nestjs/common';
import { FindOneOptions } from "typeorm";
import { <%= classify(name) %>Entity } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.entity";
import { BaseCollectionFilter } from "@app/common/dto/BaseCollectionFilter";
import { <%= classify(name) %>Repository } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.repository";
import { Create<%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/create<%= classify(name) %>.dto";
import { Update<%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/update<%= classify(name) %>.dto";
import LogClass from '@app/common/logger/logger.decorator';

@Injectable()
@LogClass()
export class <%= classify(name) %>Service {
    constructor(
        private readonly <%= lowerCase(name) %>Repository: <%= classify(name) %>Repository
    ) { }

    public async findOne(filter: FindOneOptions <<%= classify(name) %>Entity >): Promise <<%= classify(name) %>Entity | undefined > {
        return this.<%= lowerCase(name) %>Repository.findOne(filter);
}

    public async findAll(filter: BaseCollectionFilter): Promise <[<%= classify(name) %>Entity[], number]> {
    return this.<%= lowerCase(name) %>Repository.findAndCount({ where: {}, take: filter.limit, skip: filter.offset });
    }

    public async create(create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto): Promise <<%= classify(name) %>Entity> {
    const user = await this.<%= lowerCase(name) %>Repository.create(create<%= classify(name) %>Dto);

return this.<%= lowerCase(name) %>Repository.save(user);
    }

    public async update(<%= lowerCase(name) %>Entity: <%= classify(name) %>Entity, update<%= classify(name) %>Dto: Update<%= classify(name) %>Dto): Promise <<%= classify(name) %>Entity> {
    const updated<%= classify(name) %> = this.<%= lowerCase(name) %>Repository.merge(<%= lowerCase(name) %>Entity, update<%= classify(name) %>Dto);

return this.<%= lowerCase(name) %>Repository.save(updated<%= classify(name) %>);
    }

    public async delete (<%= lowerCase(name) %>Entity: <%= classify(name) %>Entity): Promise <void> {
    await this.<%= lowerCase(name) %>Repository.remove(<%= lowerCase(name) %>Entity);
}
}

