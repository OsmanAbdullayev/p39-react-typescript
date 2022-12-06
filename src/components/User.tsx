type UserType={
  username: string,
  messageCount: number,
  isLoggedIn: boolean
}

const User = (props:UserType) => {
  return (
    <p className="alert alert-success py-1 px-2 m-0 me-2 text-center">{props.isLoggedIn ? `Welcome, ${props.username}! You have ${props.messageCount} new messages!`:''}</p>
  )
}

export default User