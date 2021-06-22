import { Injectable, PipeTransform } from '@nestjs/common';
import { <%= classify(name) %>Entity } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.entity";
import { <%= classify(name) %>Service } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.service";
import { <%= classify(name) %>NotFoundException } from "@app/modules/<%= lowerCase(name) %>/exceptions/<%= lowerCase(name) %>NotFound.exception";

@Injectable()
export class <%= classify(name) %>ByIdPipe implements PipeTransform<string, Promise<<%= classify(name) %>Entity>> {
  constructor(private readonly service: <%= classify(name) %>Service) {}

  async transform(id: string): Promise<<%= classify(name) %>Entity> {
    const <%= lowerCase(name) %>Entity = await this.service.findOne({ where: { id }});

    if (!<%= lowerCase(name) %>Entity) {
      throw new <%= classify(name) %>NotFoundException();
    }

    return <%= lowerCase(name) %>Entity;
  }
}

