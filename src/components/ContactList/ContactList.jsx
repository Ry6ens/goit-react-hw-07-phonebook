import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import styles from "./ContactList.module.scss";
import stylesButton from "../PhonebookOptions/PhonebookOptions.module.scss";
import PhonebookOptions from "../PhonebookOptions/PhonebookOptions";
import { getFilterContacts } from "../../redux/selectors";
import {
  getContactsOperations,
  removeContactsOperation,
} from "../../redux/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(getContactsOperations());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function removeContact(id) {
    dispatch(removeContactsOperation(id));
  }

  return (
    <>
      <ul>
        {contactsFilter.map(({ id, name, phone }) => {
          return (
            <li key={id} className={styles.item}>
              <div className={styles.itemThumb}>
                <span>
                  {name}: {phone}
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
