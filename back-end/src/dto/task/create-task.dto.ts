import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty()
    projectId: number
    
    @ApiProperty()
    text: string
}