import { Education } from "./Education";
import { FamilyDetails } from "./FamilyDetails";
import { WorkExperience } from "./WorkExperience";
import { PartnerPreferences } from "./PartnerPreferences";
export interface BiodataFormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  religion: string;
  caste: string;
  height: string;
  weight: string;
  complexion: string;
  bloodGroup: string;
  address: string;
  phoneNumber: string;
  emailAddress: string;
  education: Education[];
  workExperience: WorkExperience[];
  familyDetails: FamilyDetails;
  partnerPreferences: PartnerPreferences;
}
