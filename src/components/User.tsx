type UserType={
  username: string,
  messageCount: number,
  isLoggedIn: boolean
}

const User = (props:UserType) => {
  return (
    <p className="alert alert-success">{props.isLoggedIn ? `Welcome, ${props.username}`:''}</p>
  )
}

export default User