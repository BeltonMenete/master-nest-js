import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamDto {
  @IsInt()
  @IsOptional()
  public id?: number;
}
