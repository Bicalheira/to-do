import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDto {
    @ApiProperty()
    text: string
    
    @ApiProperty()
    status: number
}