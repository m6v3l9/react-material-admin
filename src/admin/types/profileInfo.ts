export interface ProfileInfo {
  id: string;
  avatar?: string;
  email: string;
  firstName: string;
  gender?: "F" | "M" | "NC";
  job: string;
  lastName: string;
}
