import ListItems from "./ListItems";

const Content = ({items, handleCheck, handleDelete}) => {
  
  return (
    <main>
        {(items.length) ? (
            <ListItems 
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
        ): (
            <p>Your List is Empty</p>
        )}
       
    </main>
  )
}

export default Content