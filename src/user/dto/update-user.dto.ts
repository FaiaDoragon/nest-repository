import { PartialType } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class UpdateUserDto extends PartialType(UserDto) {
    id: number;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    city: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
