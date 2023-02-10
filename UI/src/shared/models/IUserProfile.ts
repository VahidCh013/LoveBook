export type IUserProfile = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userName: string;
  id: string;
};

export type UserProfileDto = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  userId: string;
};
