import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice'
import { FaUser, FaPhone, FaPlus } from "react-icons/fa";

const formSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.number().positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point").required('Required!'),
})

const INITIAL_FORM_DATA = {
  name: '',
  number: ''
}

const ContactForm = () => {
  const dispatch = useDispatch()
  
  const handleSubmit = (data, actions) => {
    dispatch(addContact(data))
    actions.resetForm()
  }

  return(
    <Formik
    validationSchema={formSchema}
    initialValues={INITIAL_FORM_DATA}
    onSubmit={handleSubmit}
    >
    <Form className={css.form}>
      <label className={css.inputLabelUser}><FaUser className={css.labelIcon}/>
        <Field className={css.formName} type="text" name='name' placeholder='ivan Andrushchenko'/>
        <ErrorMessage 
        className={css.errorMsg}
        name="name"
        component='span'
        />
      </label>
      <label className={css.inputLabelNumber}><FaPhone className={css.labelIcon}/>
        <Field className={css.formNumb} type='tel' name='number' placeholder='+38063123456'/>
        <ErrorMessage 
        className={css.errorMsg}
        name="number"
        component='span'
        />
      </label>
      <label className={css.inputLabelBtn}>
        <button className={css.btnAdd} type='submit'>
        <FaPlus className={css.labelIcon}/>
        Add contact</button>
      </label>
    </Form>
    </Formik>
  )
};

export default ContactForm

