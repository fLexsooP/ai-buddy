import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div>
      Root Page (Protected)
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default RootPage;