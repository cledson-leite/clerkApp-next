import { getUsers } from '@/get_users'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import React from 'react'

import styles from "@/app/page.module.css";

const Page = async () => {
    const users = await getUsers()
  return (
    <main className={styles.main}>
      <h4>Clerk App Nextjs</h4>
      {
        users.message
            ? <>
                <p>{users.message}</p>
                <p>{users.error}</p>
                <p>{users.statusCode}</p>
              </>
            : <ol>
                {users.data.map((user: User) => (
                <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
              </ol>
      }
      
    </main>
  )
}

export default Page