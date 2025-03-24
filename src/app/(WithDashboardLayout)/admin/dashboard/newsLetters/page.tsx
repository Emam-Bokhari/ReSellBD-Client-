export const dynamic = "force-dynamic";
import ManageNewsLetters from "@/components/modules/Dashboard/NewsLetters";
import { getAllNewsLetters } from "@/services/NewsLetter";

export default async function NewsLettersManagementPage() {
  const { data } = await getAllNewsLetters();
  const newsLetters = data ?? [];

  return (
    <div className="p-4">
      <ManageNewsLetters newsLetters={newsLetters} />
    </div>
  );
}
