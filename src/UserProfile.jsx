import './UserProfile.css'

function UserProfile({ user }) {

    return <div className="user-profile">
        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="" />
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.companyName}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        </div>
    </div>
}

export default UserProfile