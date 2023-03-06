const Author = ({ dataAuthor }) => {
    console.log(dataAuthor)

    // propiedad?.propiedadAnidada
    //propiedad?.[indice]
    return(
        <div>
            <h1>{ dataAuthor.author }</h1>
        </div>
    )
}

export default Author