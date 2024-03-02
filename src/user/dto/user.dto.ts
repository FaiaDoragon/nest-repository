export class UserDto {
    id: number;
    name: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    city: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  }
  