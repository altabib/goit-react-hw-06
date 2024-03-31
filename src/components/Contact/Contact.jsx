import css from "./Contact.module.css"
import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'


const Contact = ({ data: { id, name, number} }) => { 
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(id))
    return (
        
        <div className={css.contactInform}>
            
            <div className={css.contactCard}>
                <BsFillPersonFill className={css.contactIcon} />
                <p>{name}</p>
            </div>
            
            <div className={css.contactCard}>
                <AiFillPhone className={css.contactIcon}/>
                <p>{number} </p>
            </div>   
            
            <button className={css.btnDelete} type ="submit" onClick={handleDelete}>Delete</button>
           
            </div>
            
)
}

export default Contact;