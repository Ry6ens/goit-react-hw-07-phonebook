import { useSelector, useDispatch } from "react-redux";

import styles from "./ContactList.module.scss";
import stylesButton from "../PhonebookOptions/PhonebookOptions.module.scss";
import PhonebookOptions from "../PhonebookOptions/PhonebookOptions";
import { getFilterContacts } from "../../redux/selectors";
import { removeContactAction } from "../../redux/action";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);

  function removeContact(id) {
    dispatch(removeContactAction(id));
  }

  return (
    <>
      <ul>
        {contactsFilter.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.item}>
              <div className={styles.itemThumb}>
                <span>
                  {name}: {number}
                </span>
                <PhonebookOptions
                  id={id}
                  title="Remove"
                  className={stylesButton.removeBtn}
                  removeItem={removeContact}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
