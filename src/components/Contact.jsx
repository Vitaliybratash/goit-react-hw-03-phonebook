export const Contact = ({el,deleteContact})=> {
    return(
        <>
         <li>
            {el.name} {el.number}
          </li>
          <button onClick={deleteContact.bind(this, el.id)}>Delete</button>
        </>
    )
}
