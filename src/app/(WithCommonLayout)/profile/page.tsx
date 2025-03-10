export const dynamic = "force-dynamic";
import Profile from "@/components/modules/Profile";
import { getMe } from "@/services/User";
import { Fragment } from "react";

export default async function ProfilePage() {
  const { data: profileData } = await getMe();
  // console.log(profile);
  return (
    <Fragment>
      <Profile profileData={profileData} />
    </Fragment>
  );
}
