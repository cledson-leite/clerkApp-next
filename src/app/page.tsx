import { UserButton, useUser } from "@clerk/nextjs";
import styles from "@/app/page.module.css";
import { currentUser, User } from "@clerk/nextjs/server";
import { getUsers } from "@/get_users";

export default async function Home() {
  const user = await currentUser()
  //const auth = useAuth()
  // const {user} = useUser()
  const users = await getUsers()
  return (
    <main className={styles.main}>
      <h4>Clerk App Nextjs</h4>
      <div className={styles.user}>
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
      </div>
      <UserButton 
        appearance={{
          elements: {
            userButtonAvatarBox: {
              width: "3.5rem",
              height: "3.5rem",
            }
          }
        }}
      />
      <ol>
        {users.data.map((user: User) => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ol>
    </main>
  );
}
