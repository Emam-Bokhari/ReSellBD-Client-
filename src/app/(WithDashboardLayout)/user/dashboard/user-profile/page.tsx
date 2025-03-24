import { Fragment } from "react";
import UserProfile from "@/components/modules/Dashboard/UserProfile";
import { getMe } from "@/services/User";

export default async function UserProfilePage() {
  const { data: profileData } = await getMe();
  return (
    <Fragment>
      <UserProfile profileData={profileData} />
    </Fragment>
  );
}
