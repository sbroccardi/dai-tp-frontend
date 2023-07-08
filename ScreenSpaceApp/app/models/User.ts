type UserType = 'public' | 'private';

interface User {
  id: string;
  type: UserType;
  fullName: string;
  avatar: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
