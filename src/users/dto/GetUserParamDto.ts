import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserParamDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  public id?: number;
}
