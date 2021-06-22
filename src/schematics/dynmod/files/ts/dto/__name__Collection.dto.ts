import { ApiProperty } from '@nestjs/swagger';
import { BaseCollectionClass } from "@app/common/dto/BaseCollectionResponse";
import { <%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/<%= lowerCase(name) %>.dto";

export class <%= classify(name) %>CollectionDto extends BaseCollectionClass {
    @ApiProperty({ isArray: true, type: <%= classify(name) %>Dto })
    data: <%= classify(name) %>Dto[];
}

