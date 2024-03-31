import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'
import { selectContacts } from '../../selectors/selectors'
import { selectNameFilter } from '../../selectors/selectors'


const ContactList = () => { 

const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)
  const searchContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))

    return (
        <ul className={css.ulList}>
            {searchContact.map((contact) => (
            <li className={css.itemList} key={contact.id}>
            <Contact data={contact} />
        </li>
      ))}
        </ul>
)
}

export default ContactList;