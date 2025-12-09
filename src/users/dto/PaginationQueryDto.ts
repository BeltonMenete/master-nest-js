import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number) // auto-convert string → number
  public page?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public limit?: number;
}
