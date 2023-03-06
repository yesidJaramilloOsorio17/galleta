

const UserCard = ({ userData }) => {
    console.log(userData)

    // propiedad?.propiedadAnidada
    //propiedad?.[indice]
    return(
        <div className="user-card">
            <h1>{ userData.phrase } </h1>
        </div>
    )
}

export default UserCard