// This is a simplified auth utility
// In a real application, you would use a proper auth library like NextAuth.js or Auth.js

// Mock user data - in a real app, this would come from a database
const users = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123", // Never store plain text passwords in a real app!
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    name: "Regular User",
    role: "user",
  },
]

// Mock authentication function
export async function authenticate(email: string, password: string) {
  // In a real app, you would hash the password and check against a database
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return null
  }

  // Don't include the password in the returned user object
  const { password: _, ...userWithoutPassword } = user

  return userWithoutPassword
}

// Check if user is admin
export function isAdmin(user: { role: string } | null) {
  return user?.role === "admin"
}

// Mock function to get current user
export async function getCurrentUser() {
  // In a real app, this would check cookies/JWT/session
  // For demo purposes, we'll return null (not logged in)
  return null
}
